import { useEffect, type RefObject } from 'react'
import { gsap, FINE_POINTER, MOTION_OK } from '../lib/gsap'

/** Pulls an element towards the pointer while it hovers over it. */
export function useMagnetic(ref: RefObject<HTMLElement | null>, strength = 0.35) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mm = gsap.matchMedia()
    mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })

      const onMove = (e: PointerEvent) => {
        const { left, top, width, height } = el.getBoundingClientRect()
        xTo((e.clientX - (left + width / 2)) * strength)
        yTo((e.clientY - (top + height / 2)) * strength)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }

      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      return () => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
        gsap.set(el, { x: 0, y: 0 })
      }
    })

    return () => mm.revert()
  }, [ref, strength])
}
