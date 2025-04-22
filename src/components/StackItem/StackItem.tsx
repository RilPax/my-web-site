type StackItemProps = {
    title: string;
    info: string;
}

export default function StackItem( {title, info}: StackItemProps ) {
    return ( 
        <li className="stack__item">
            <span className="stack__item-title">{title}</span>
            <span className="stack__item-info">{info}</span>
        </li>
    )
}