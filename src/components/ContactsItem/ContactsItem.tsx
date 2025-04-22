type ContactsItemProps = {
    link: string,
    src: string,
    title: string
}


export default function ContactsItem( {link, src, title}: ContactsItemProps ) {
    return (
        <li className="contacts__item">
            <a href={link} className="contacts__item-link">
                <div className="contacts__item-image">
                    <img src={src} alt="messenger icon" />
                </div>
                <span className="contacts__item-title">{title}</span>
            </a>
        </li>
    )
}