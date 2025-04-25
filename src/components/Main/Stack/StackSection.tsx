import { stack } from '../../../utils/stack'
import StackSectionItem from './Item/StackSectionItem'
import './stackSection.scss'

export default function StackSection() {
    return (
        <section className="stack" id='stack'>
            <h2 className="stack__heading">
                Stack
            </h2>
            <div className="stack__info">
                <h3>
                    Here`s some tools I use at work:
                </h3>
                <ul className="stack__info__list">
                {
                    stack.map((stackItem, index) => <StackSectionItem 
                    key={index} 
                    id={stackItem.id}
                    title={stackItem.title}
                    className={index % 2 === 0 ? 'right' : 'left'} />)
                }
                </ul>
            </div>
        </section>
    )
}