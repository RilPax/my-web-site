import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, MOTION_OK } from '../../lib/gsap'
import { services } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import './Services.scss'

export default function Services() {
  const ref = useRef<HTMLElement>(null)

  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray<HTMLElement>('.service').forEach((row) => {
        gsap
          .timeline({ scrollTrigger: { trigger: row, start: 'top 88%' } })
          .from(row.querySelector('.service__line'), { scaleX: 0, duration: 1.4, ease: 'expo.out' })
          .from(row.querySelectorAll('.service__content > *'), { y: 60, opacity: 0, stagger: 0.08, duration: 1 }, 0.1)
      })
    })
  }, ref)

  return (
    <section className='services section' id='services' ref={ref}>
      <div className='container'>
        <SectionHeading index='04' label='Services' title='How I can help' />

        <ol className='services__list'>
          {services.map((s, i) => (
            <li key={s.title} className='service'>
              <span className='service__line' aria-hidden />
              <span className='service__bg' aria-hidden />
              <a href='#contact' className='service__content'>
                <span className='service__index'>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className='service__arrow'>
                  <Icon name='arrow' size={32} />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
