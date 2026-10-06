import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap } from '../../lib/gsap'
import Icon from '../ui/Icon'
import './Preloader.scss'

type Props = { onReveal: () => void; onDone: () => void }

const WORDS = ['Design', 'Code', 'Motion', 'Hello']

export default function Preloader({ onReveal, onDone }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useGsap(() => {
    const root = document.documentElement
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      onReveal()
      onDone()
      return
    }

    root.classList.add('is-loading')
    const counter = { value: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        root.classList.remove('is-loading')
        onDone()
      },
    })

    tl.from('.preloader__logo', { scale: 0.6, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' })
      .to(
        counter,
        {
          value: 100,
          duration: 2,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (counterRef.current) counterRef.current.textContent = String(Math.round(counter.value)).padStart(3, '0')
          },
        },
        0,
      )
      .to('.preloader__bar span', { scaleX: 1, duration: 2, ease: 'power2.inOut' }, 0)

    const words = gsap.utils.toArray<HTMLElement>('.preloader__word')
    gsap.set(words, { yPercent: 105 })
    words.forEach((word, i) => {
      tl.to(word, { yPercent: 0, duration: 0.35, ease: 'expo.out' }, i * 0.5)
      if (i < words.length - 1) tl.to(word, { yPercent: -105, duration: 0.3, ease: 'expo.in' }, i * 0.5 + 0.38)
    })

    tl.to('.preloader__content', { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, '+=0.15')
      .add(onReveal)
      .to('.preloader__panel', { yPercent: -100, duration: 1.1, stagger: 0.08, ease: 'expo.inOut' }, '<')
      .set(ref.current, { display: 'none' })

    return () => root.classList.remove('is-loading')
  }, ref)

  return (
    <div className='preloader' ref={ref} aria-hidden>
      <div className='preloader__panels'>
        <span className='preloader__panel' />
        <span className='preloader__panel' />
        <span className='preloader__panel' />
      </div>
      <div className='preloader__content'>
        <Icon name='logo' size={64} className='preloader__logo' />
        <div className='preloader__words'>
          {WORDS.map((w) => (
            <span key={w} className='preloader__word'>
              {w}
            </span>
          ))}
        </div>
        <div className='preloader__bottom'>
          <span>Loading portfolio</span>
          <span ref={counterRef} className='preloader__counter'>
            000
          </span>
        </div>
        <div className='preloader__bar'>
          <span />
        </div>
      </div>
    </div>
  )
}
