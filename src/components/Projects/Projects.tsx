import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, MOTION_OK, FINE_POINTER } from '../../lib/gsap'
import { projects } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'
import RollText from '../ui/RollText'
import './Projects.scss'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  useGsap(() => {
    const mm = gsap.matchMedia()

    mm.add(MOTION_OK, () => {
      gsap.utils.toArray<HTMLElement>('.project').forEach((project) => {
        const media = project.querySelector('.project__media')
        const img = project.querySelector('.project__media img')

        gsap.fromTo(
          media,
          { clipPath: 'inset(18% 12% 18% 12% round 32px)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 20px)',
            ease: 'none',
            scrollTrigger: { trigger: project, start: 'top 90%', end: 'top 25%', scrub: true },
          },
        )
        gsap.fromTo(
          img,
          { scale: 1.3, yPercent: -6 },
          {
            scale: 1,
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: project, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
        gsap.from(project.querySelectorAll('.project__info > *'), {
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 1,
          scrollTrigger: { trigger: project.querySelector('.project__info'), start: 'top 88%' },
        })
      })

      gsap.from('.projects__soon', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: { trigger: '.projects__soon', start: 'top 90%' },
      })
    })

    // 3D tilt on hover.
    mm.add(`${FINE_POINTER} and ${MOTION_OK}`, () => {
      const cleanups = gsap.utils.toArray<HTMLElement>('.project__frame').map((frame) => {
        const rx = gsap.quickTo(frame, 'rotateX', { duration: 0.8, ease: 'power3.out' })
        const ry = gsap.quickTo(frame, 'rotateY', { duration: 0.8, ease: 'power3.out' })
        const onMove = (e: PointerEvent) => {
          const r = frame.getBoundingClientRect()
          rx(((e.clientY - r.top) / r.height - 0.5) * -8)
          ry(((e.clientX - r.left) / r.width - 0.5) * 8)
        }
        const onLeave = () => {
          rx(0)
          ry(0)
        }
        frame.addEventListener('pointermove', onMove)
        frame.addEventListener('pointerleave', onLeave)
        return () => {
          frame.removeEventListener('pointermove', onMove)
          frame.removeEventListener('pointerleave', onLeave)
        }
      })
      return () => cleanups.forEach((fn) => fn())
    })
  }, ref)

  return (
    <section className='projects section' id='work' ref={ref}>
      <div className='container'>
        <SectionHeading index='03' label='Selected work' title='Things I’ve built' />

        <ul className='projects__list'>
          {projects.map((p, i) => (
            <li key={p.title} className='project'>
              <div className='project__frame'>
                <a
                  href={p.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project__media'
                  data-cursor='Visit'
                  aria-label={`Open ${p.title}`}
                >
                  <img src={p.image} alt={`${p.title} screenshot`} loading='lazy' />
                </a>
              </div>

              <div className='project__info'>
                <div className='project__head'>
                  <span className='project__index'>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <span className='project__year'>{p.year}</span>
                </div>
                <p className='project__desc'>{p.description}</p>
                <ul className='project__tags'>
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className='project__links'>
                  <a href={p.link} target='_blank' rel='noopener noreferrer'>
                    <RollText>Live site</RollText>
                    <Icon name='arrow' size={16} className='project__arrow' />
                  </a>
                  <a href={p.repo} target='_blank' rel='noopener noreferrer'>
                    <RollText>Source code</RollText>
                    <Icon name='github' size={16} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className='projects__soon'>
          <span className='projects__soon-dot' />
          <p>
            More projects are in the oven. <span>Meanwhile, check out my GitHub</span>
          </p>
          <a href='https://github.com/RilPax' target='_blank' rel='noopener noreferrer'>
            <RollText>github.com/RilPax</RollText>
            <Icon name='arrow' size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
