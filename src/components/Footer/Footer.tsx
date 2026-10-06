import { gsap } from '../../lib/gsap'
import { profile } from '../../data/content'
import Icon from '../ui/Icon'
import RollText from '../ui/RollText'
import './Footer.scss'

export default function Footer() {
  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.to(window, { scrollTo: 0, duration: reduced ? 0 : 1.6, ease: 'expo.inOut' })
  }

  return (
    <footer className='footer'>
      <div className='footer__inner container'>
        <span>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </span>
        <a href='https://github.com/RilPax/my-web-site' target='_blank' rel='noopener noreferrer'>
          <RollText>Designed & built by me</RollText>
        </a>
        <button type='button' className='footer__top' onClick={toTop} aria-label='Back to top'>
          <Icon name='arrowUp' size={20} />
        </button>
      </div>
    </footer>
  )
}
