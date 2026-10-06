import './RollText.scss'

/** Text that rolls up to a duplicate of itself on hover. Pure CSS. */
export default function RollText({ children }: { children: string }) {
  return (
    <span className='roll' data-text={children}>
      <span className='roll__inner'>{children}</span>
    </span>
  )
}
