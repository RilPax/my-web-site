import { useEffect, useRef } from 'react'
import { gsap, FINE_POINTER } from '../../lib/gsap'
import './Cursor.scss'

const INTERACTIVE = 'a, button, [data-cursor]'

/**
 * Dot + trailing ring cursor. Uses event delegation, so it reacts to any
 * link/button on the page — including ones rendered later. Elements with
 * `data-cursor="Label"` expand the ring and show the label inside it.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(FINE_POINTER, () => {
      const dot = dotRef.current!
      const ring = ringRef.current!
      const label = labelRef.current!
      const root = document.documentElement

      root.classList.add('has-cursor')
      gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

      const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' })
      const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' })
      const ringX = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3.out' })
      const ringY = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3.out' })

      let visible = false

      const onMove = (e: PointerEvent) => {
        if (!visible) {
          visible = true
          gsap.set([dot, ring], { x: e.clientX, y: e.clientY })
          gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
        }
        dotX(e.clientX)
        dotY(e.clientY)
        ringX(e.clientX)
        ringY(e.clientY)
      }

      const onOver = (e: PointerEvent) => {
        const target = (e.target as Element).closest<HTMLElement>(INTERACTIVE)
        const text = target?.dataset.cursor

        ring.classList.toggle('cursor__ring--hover', Boolean(target))
        ring.classList.toggle('cursor__ring--label', Boolean(text))
        dot.classList.toggle('cursor__dot--hidden', Boolean(target))
        if (text) label.textContent = text
      }

      const onLeaveWindow = () => {
        visible = false
        gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
      }

      const onDown = () => gsap.to(ring, { scale: 0.8, duration: 0.2 })
      const onUp = () => gsap.to(ring, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' })

      window.addEventListener('pointermove', onMove)
      document.addEventListener('pointerover', onOver)
      document.documentElement.addEventListener('pointerleave', onLeaveWindow)
      window.addEventListener('pointerdown', onDown)
      window.addEventListener('pointerup', onUp)

      return () => {
        root.classList.remove('has-cursor')
        window.removeEventListener('pointermove', onMove)
        document.removeEventListener('pointerover', onOver)
        document.documentElement.removeEventListener('pointerleave', onLeaveWindow)
        window.removeEventListener('pointerdown', onDown)
        window.removeEventListener('pointerup', onUp)
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <div className='cursor' aria-hidden>
      <div className='cursor__ring' ref={ringRef}>
        <span className='cursor__label' ref={labelRef} />
      </div>
      <div className='cursor__dot' ref={dotRef} />
    </div>
  )
}
