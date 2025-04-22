import { contacts } from '../../utils/contacts'
import ContactsItem from '../ContactsItem/ContactsItem'

import './Contacts.scss'

export default function ContactsSection() {

    return (
        <section className='contacts'>
            <h3 className="contacts__title">Contacts</h3>
            <p className="contacts__description">
            Got a cool idea? A question? Or maybe just wanna say hi?  
            Don’t be shy — hit me up! I’m always open for new connections, collaborations, or just a geeky chat about code.
            </p>
            <ul className="contacts__list">
                {contacts.map((contact, index) => 
                    <ContactsItem key={index} {...contact}/>
                )}
            </ul>
            <a href="mailto:anonym2004@mail.ru">Write me!</a>
        </section>
    )
}