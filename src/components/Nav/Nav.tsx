import { useEffect, useRef, useState } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, ScrollTrigger, MOTION_OK } from '../../lib/gsap'
import { navLinks, profile, socials } from '../../data/content'
import Icon from '../ui/Icon'
import RollText from '../ui/RollText'
import './Nav.scss'

export default function Nav({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const menuTl = useRef<gsap.core.Timeline>(null)
  const [open, setOpen] = useState(false)

  useGsap(
    () => {
      if (!ready) return

      gsap.from('.nav__bar > *', { y: -30, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out', delay: 0.4 })

      // Scroll progress line.
      gsap.to('.nav__progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      })

      // Hide on scroll down, show on scroll up.
      const hide = gsap.to(ref.current, { yPercent: -110, duration: 0.4, ease: 'power2.inOut', paused: true })
      ScrollTrigger.create({
        start: 'top+=120 top',
        end: 'max',
        onUpdate: (self) => (self.direction === 1 ? hide.play() : hide.reverse()),
        onLeaveBack: () => hide.reverse(),
      })
      ScrollTrigger.create({
        start: 'top+=40 top',
        end: 'max',
        toggleClass: { targets: ref.current, className: 'nav--scrolled' },
      })

      // Mobile menu timeline.
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        menuTl.current = gsap
          .timeline({ paused: true })
          .fromTo('.nav__menu', { clipPath: 'circle(0% at 100% 0%)' }, { clipPath: 'circle(150% at 100% 0%)', duration: 0.9, ease: 'expo.inOut' })
          .from('.nav__menu-link', { yPercent: 120, stagger: 0.06, duration: 0.8, ease: 'expo.out' }, '-=0.45')
          .from('.nav__menu-footer > *', { opacity: 0, y: 20, stagger: 0.05 }, '-=0.6')
      })
    },
    ref,
    [ready],
  )

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    const tl = menuTl.current
    if (tl) {
      if (open) tl.timeScale(1).play()
      else tl.timeScale(1.6).reverse()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 1025px)')
    const onResize = () => desktop.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`} ref={ref}>
      <div className='nav__bar container'>
        <a href='#top' className='nav__logo' aria-label='Back to top' onClick={close}>
          <Icon name='logo' size={40} />
          <span className='nav__logo-text'>
            {profile.firstName}
            <span className='accent'>.</span>
          </span>
        </a>

        <nav className='nav__links' aria-label='Primary'>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              <RollText>{l.label}</RollText>
            </a>
          ))}
        </nav>

        <a href={profile.resume} target='_blank' rel='noopener noreferrer' className='nav__cta'>
          <RollText>Resume</RollText>
          <Icon name='arrow' size={16} />
        </a>

        <button
          type='button'
          className='nav__burger'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <span className='nav__progress' aria-hidden />

      <div className='nav__menu' id='mobile-menu' inert={!open}>
        <nav className='nav__menu-links' aria-label='Mobile'>
          {[...navLinks, { href: profile.resume, label: 'Resume' }].map((l, i) => (
            <span key={l.href} className='nav__menu-mask'>
              <a href={l.href} className='nav__menu-link' onClick={close}>
                <span className='nav__menu-index'>0{i + 1}</span>
                {l.label}
              </a>
            </span>
          ))}
        </nav>
        <div className='nav__menu-footer'>
          <a href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className='nav__menu-socials'>
            {socials.map((s) => (
              <a key={s.title} href={s.href} target='_blank' rel='noopener noreferrer'>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
