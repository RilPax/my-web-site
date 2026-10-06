import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, SplitText, MOTION_OK } from '../../lib/gsap'
import { aboutStatement, aboutStory, principles, profile } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import './About.scss'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const statementRef = useRef<HTMLParagraphElement>(null)

  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      // Words light up one by one as the statement scrolls through the viewport.
      const split = SplitText.create(statementRef.current, { type: 'words' })
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: statementRef.current, start: 'top 80%', end: 'bottom 45%', scrub: true },
        },
      )

      gsap.fromTo(
        '.about__portrait img',
        { yPercent: -12, scale: 1.2 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: '.about__portrait', start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
      gsap.from('.about__portrait', {
        clipPath: 'inset(100% 0% 0% 0% round 20px)',
        duration: 1.4,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: '.about__portrait', start: 'top 80%' },
      })

      gsap.from('.about__story p', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: { trigger: '.about__story', start: 'top 80%' },
      })

      gsap.utils.toArray<HTMLElement>('.about__principle').forEach((item) => {
        gsap
          .timeline({ scrollTrigger: { trigger: item, start: 'top 88%' } })
          .from(item.querySelector('.about__principle-line'), { scaleX: 0, duration: 1.2, ease: 'expo.out' })
          .from(item.querySelectorAll(':scope > :not(.about__principle-line)'), { y: 30, opacity: 0, stagger: 0.08 }, 0.1)
      })
    })
  }, ref)

  return (
    <section className='about section' id='about' ref={ref}>
      <div className='container'>
        <SectionHeading index='01' label='About' title='A bit about me' />

        <p className='about__statement' ref={statementRef}>
          {aboutStatement}
        </p>

        <div className='about__grid'>
          <figure className='about__portrait' data-cursor='Hi!'>
            <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} loading='lazy' />
            <figcaption>
              {profile.firstName} {profile.lastName}
              <span>{profile.role}</span>
            </figcaption>
          </figure>

          <div className='about__content'>
            <div className='about__story'>
              {aboutStory.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className='about__principles'>
              {principles.map((p, i) => (
                <li key={p.title} className='about__principle'>
                  <span className='about__principle-line' aria-hidden />
                  <span className='about__principle-index'>0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
