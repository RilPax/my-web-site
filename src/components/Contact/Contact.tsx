import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { useMagnetic } from '../../hooks/useMagnetic'
import { gsap, SplitText, MOTION_OK } from '../../lib/gsap'
import { profile, socials } from '../../data/content'
import Icon from '../ui/Icon'
import RollText from '../ui/RollText'
import './Contact.scss'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const circleRef = useRef<HTMLAnchorElement>(null)
  useMagnetic(circleRef, 0.4)

  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      const split = SplitText.create(titleRef.current, { type: 'words,chars', mask: 'words', wordsClass: 'splitWord' })

      gsap
        .timeline({ scrollTrigger: { trigger: ref.current, start: 'top 70%' } })
        .from('.contact__eyebrow', { y: 20, opacity: 0 })
        .from(split.chars, { yPercent: 110, rotate: 8, stagger: 0.025, duration: 1.2, ease: 'expo.out' }, 0.1)
        .from('.contact__circle', { scale: 0, rotate: -90, duration: 1.4, ease: 'elastic.out(1, 0.6)' }, 0.5)
        .from('.contact__row > *', { y: 30, opacity: 0, stagger: 0.08 }, 0.7)

      // Slowly spinning text ring around the circle button.
      gsap.to('.contact__ring', { rotate: 360, duration: 16, repeat: -1, ease: 'none' })
    })
  }, ref)

  return (
    <section className='contact section' id='contact' ref={ref}>
      <div className='contact__glow' aria-hidden />
      <div className='container'>
        <p className='contact__eyebrow'>
          <span className='accent'>05</span> — Got an idea? Let’s make it real.
        </p>

        <div className='contact__hero'>
          <h2 className='contact__title' ref={titleRef}>
            Let’s work together
          </h2>

          <a ref={circleRef} href={`mailto:${profile.email}`} className='contact__circle' aria-label={`Email ${profile.email}`}>
            <svg viewBox='0 0 200 200' className='contact__ring' aria-hidden>
              <defs>
                <path id='contact-ring-path' d='M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0' />
              </defs>
              <text>
                <textPath href='#contact-ring-path' textLength='488' lengthAdjust='spacing'>
                  {'say hello • say hello • say hello • '}
                </textPath>
              </text>
            </svg>
            <Icon name='arrow' size={40} />
          </a>
        </div>

        <div className='contact__row'>
          <div className='contact__block'>
            <span className='contact__label'>Email</span>
            <a href={`mailto:${profile.email}`} className='contact__email'>
              <RollText>{profile.email}</RollText>
            </a>
          </div>

          <div className='contact__block'>
            <span className='contact__label'>Socials</span>
            <ul className='contact__socials'>
              {socials.map((s) => (
                <li key={s.title}>
                  <a href={s.href} target='_blank' rel='noopener noreferrer'>
                    <Icon name={s.icon} size={20} />
                    <RollText>{s.title}</RollText>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='contact__block'>
            <span className='contact__label'>Resume</span>
            <a href={profile.resume} target='_blank' rel='noopener noreferrer' className='contact__resume'>
              <RollText>Download CV</RollText>
              <Icon name='arrow' size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
