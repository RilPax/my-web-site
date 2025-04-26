type ContactsItemProps = {
    link: string;
    id: string
}

export default function ContactsItem({link, id}: ContactsItemProps) {
    return (
        <li>
            <a href={link}>
                <svg width='50px' height='50px'>
                    <use href={`#${id}`}></use>
                </svg>
            </a>
        </li>
    )
}