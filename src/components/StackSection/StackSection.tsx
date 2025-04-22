import StackItem from '../StackItem/StackItem'
import { stack } from '../../utils/stack'

import './stackSection.scss'

export default function StackSection() {
    return (
        <section className='stack'>
            <h3 className="stack__title">Stack I use in work:</h3>
            <ul className="stack__list">
                {stack.map((item, index) => <StackItem key={index} {...item}/>)}
            </ul>
        </section>
    )
}