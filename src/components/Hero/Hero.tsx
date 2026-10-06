import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, SplitText, MOTION_OK, FINE_POINTER } from '../../lib/gsap'
import { profile } from '../../data/content'
import MagneticButton from '../ui/MagneticButton'
import Icon from '../ui/Icon'
import './Hero.scss'

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)

  useGsap(
    () => {
      if (!ready) return
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        const split = SplitText.create('.hero__name-text', { type: 'chars', mask: 'chars', charsClass: 'splitChar' })

        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .from(split.chars, { yPercent: 115, duration: 1.4, stagger: 0.035 })
          .from('.hero__photo', { clipPath: 'inset(50% 50% 50% 50% round 999px)', duration: 1.4 }, 0.3)
          .from('.hero__photo img', { scale: 1.6, duration: 1.8 }, 0.3)
          .from('.hero__meta > *', { y: 20, opacity: 0, stagger: 0.08, duration: 1 }, 0.5)
          .from('.hero__bottom > *', { y: 40, opacity: 0, stagger: 0.1, duration: 1.2 }, 0.7)
          .from('.hero__scroll', { opacity: 0, duration: 1 }, 1)

        // Lines drift apart while scrolling past the hero.
        gsap
          .timeline({ scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
          .to('.hero__line--1', { xPercent: -12, ease: 'none' }, 0)
          .to('.hero__line--2', { xPercent: 10, ease: 'none' }, 0)
          .to('.hero__photo', { rotate: -8, scale: 1.15, ease: 'none' }, 0)
          .to('.hero__inner', { opacity: 0.2, ease: 'none' }, 0)

        gsap.to('.hero__scroll-line span', { yPercent: 200, repeat: -1, duration: 1.6, ease: 'power2.inOut' })
      })

      // Glow follows the pointer.
      mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
        const glow = ref.current!.querySelector('.hero__glow')
        const xTo = gsap.quickTo(glow, 'x', { duration: 1.2, ease: 'power3.out' })
        const yTo = gsap.quickTo(glow, 'y', { duration: 1.2, ease: 'power3.out' })
        const onMove = (e: PointerEvent) => {
          xTo(e.clientX - window.innerWidth / 2)
          yTo(e.clientY - window.innerHeight / 2)
        }
        window.addEventListener('pointermove', onMove)
        return () => window.removeEventListener('pointermove', onMove)
      })
    },
    ref,
    [ready],
  )

  return (
    <section className='hero' id='top' ref={ref}>
      <div className='hero__glow' aria-hidden />
      <div className='hero__grid' aria-hidden />

      <div className='hero__inner container'>
        <div className='hero__meta'>
          <span className='hero__status'>
            <span className='hero__status-dot' />
            Available for new projects
          </span>
          <span>{profile.role}</span>
        </div>

        <h1 className='hero__name'>
          <span className='visually-hidden'>
            {profile.firstName} {profile.lastName} — {profile.role}
          </span>
          <span className='hero__line hero__line--1' aria-hidden>
            <span className='hero__name-text'>{profile.firstName}</span>
            <span className='hero__photo'>
              <img src={profile.photo} alt='' />
            </span>
          </span>
          <span className='hero__line hero__line--2' aria-hidden>
            <span className='hero__name-text'>{profile.lastName}</span>
            <span className='hero__name-dot accent'>.</span>
          </span>
        </h1>

        <div className='hero__bottom'>
          <p className='hero__tagline'>{profile.tagline}</p>
          <div className='hero__actions'>
            <MagneticButton href='#work'>
              See my work <Icon name='arrow' size={18} />
            </MagneticButton>
            <MagneticButton href='#contact' variant='outline'>
              Get in touch
            </MagneticButton>
          </div>
        </div>
      </div>

      <a href='#about' className='hero__scroll' aria-label='Scroll to about section'>
        <span className='hero__scroll-line'>
          <span />
        </span>
        Scroll
      </a>
    </section>
  )
}
