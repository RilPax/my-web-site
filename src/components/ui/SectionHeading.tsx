import { useRef } from 'react'
import { useGsap } from '../../hooks/useGsap'
import { gsap, SplitText, MOTION_OK } from '../../lib/gsap'
import './SectionHeading.scss'

type Props = {
  index: string
  label: string
  title: string
}

export default function SectionHeading({ index, label, title }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      const split = SplitText.create(titleRef.current, { type: 'words,chars', mask: 'words', wordsClass: 'splitWord' })
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
      tl.from('.section-heading__line', { scaleX: 0, duration: 1.2, ease: 'expo.out' })
        .from('.section-heading__meta > *', { yPercent: 100, opacity: 0, stagger: 0.08 }, 0)
        .from(split.chars, { yPercent: 110, duration: 1, stagger: 0.02, ease: 'expo.out' }, 0.1)
    })
  }, ref)

  return (
    <div className='section-heading' ref={ref}>
      <div className='section-heading__meta'>
        <span className='accent'>{index}</span>
        <span>{label}</span>
      </div>
      <span className='section-heading__line' aria-hidden />
      <h2 className='section-heading__title' ref={titleRef}>{title}</h2>
    </div>
  )
}
