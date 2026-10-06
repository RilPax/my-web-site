import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, ScrollTrigger, MOTION_OK } from '../../lib/gsap'
import { marqueeWords } from '../../data/content'
import './Marquee.scss'

/** Infinite ticker whose speed and direction follow scroll velocity. */
export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null)

  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      const rows = gsap.utils.toArray<HTMLElement>('.marquee__track')
      const loops = rows.map((row, i) =>
        gsap.fromTo(
          row,
          { xPercent: i % 2 ? -50 : 0 },
          { xPercent: i % 2 ? 0 : -50, duration: 30, ease: 'none', repeat: -1 },
        )
          // Start far from zero so scrolling up (negative timeScale) has room to play backwards.
          .totalTime(3000),
      )
      const skewTo = gsap.quickTo('.marquee__row', 'skewX', { duration: 0.5, ease: 'power3.out' })

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity()
          const boost = gsap.utils.clamp(1, 6, Math.abs(velocity) / 250)
          loops.forEach((loop) => {
            gsap.to(loop, { timeScale: boost * self.direction, duration: 0.2, overwrite: true })
            gsap.to(loop, { timeScale: self.direction, duration: 1.2, delay: 0.2 })
          })
          skewTo(gsap.utils.clamp(-12, 12, velocity / -300))
        },
        onToggle: (self) => !self.isActive && skewTo(0),
      })
    })
  }, ref)

  const items = [...marqueeWords, ...marqueeWords]

  return (
    <div className='marquee' ref={ref} aria-hidden>
      {[0, 1].map((row) => (
        <div key={row} className={`marquee__row marquee__row--${row}`}>
          <div className='marquee__track'>
            {items.map((word, i) => (
              <span key={i} className='marquee__item'>
                {word}
                <svg viewBox='0 0 24 24' className='marquee__star'>
                  <path d='M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z' fill='currentColor' />
                </svg>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
