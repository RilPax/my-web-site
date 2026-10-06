import { useRef, type ReactNode } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'
import './MagneticButton.scss'

type Props = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  external?: boolean
  className?: string
}

export default function MagneticButton({ href, children, variant = 'solid', external, className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  useMagnetic(ref, 0.3)

  return (
    <a
      ref={ref}
      href={href}
      className={`mbtn mbtn--${variant} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className='mbtn__fill' aria-hidden />
      <span className='mbtn__label'>{children}</span>
    </a>
  )
}
