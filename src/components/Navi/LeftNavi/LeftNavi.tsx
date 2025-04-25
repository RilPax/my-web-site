import { contacts } from "../../../utils/contacts";
import './LeftNavi.scss'

type NaviElementProps = {
    link: string;
    id: string;
}

function NaviElement({link, id}: NaviElementProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <svg width='100%' height='100%' className="svg">
                <use href={`#${id}`}></use>
            </svg>
        </a>
    )
}

export default function LeftNavi() {
    return (
        <nav className="left_navi">
            {contacts.map((contact, index) => <NaviElement key={index} {...contact}/>)}
        </nav>
    )
}