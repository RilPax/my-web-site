import { useRef, type PointerEvent } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, ScrollTrigger, MOTION_OK } from '../../lib/gsap'
import { stack } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import './Stack.scss'

/** Feeds pointer position into CSS vars for the card spotlight effect. */
function trackSpotlight(e: PointerEvent<HTMLLIElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export default function Stack() {
  const ref = useRef<HTMLElement>(null)

  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      gsap.set('.stack__card', { y: 60, opacity: 0, rotateX: -25 })
      ScrollTrigger.batch('.stack__card', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { y: 0, opacity: 1, rotateX: 0, stagger: 0.07, duration: 1, ease: 'expo.out' }),
      })

      gsap.from('.stack__group-label', {
        x: -30,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: { trigger: '.stack__groups', start: 'top 85%' },
      })
    })
  }, ref)

  return (
    <section className='stack section' id='stack' ref={ref}>
      <div className='container'>
        <SectionHeading index='02' label='Stack' title='Tools of the trade' />

        <div className='stack__groups'>
          {stack.map((group) => (
            <div key={group.group} className='stack__group'>
              <h3 className='stack__group-label'>
                {group.group}
                <span>{String(group.items.length).padStart(2, '0')}</span>
              </h3>
              <ul className='stack__list'>
                {group.items.map((item) => (
                  <li key={item.title} className='stack__card' onPointerMove={trackSpotlight}>
                    <Icon name={item.icon} size={44} className='stack__icon' />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
