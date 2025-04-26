import { contacts } from '../../../utils/contacts'
import ContactsItem from './Contacsitem'
import './Contacts.scss'

export default function ContactsSection() {
    return (
        <section className="contacts" id="contacts">
            <h2 className="contacts__heading">Contacts</h2>
            <div className="contacts__info">
                <h3>Got questions, want to chat, or just say hi?</h3>
                <span>Send me a message and I’ll be happy to reply as soon as I can! 😊</span>
                <a href="mailto:anonym2004@mail.ru">Say Hi!</a>
                <h3>Also follow the news in My social networks:</h3>
                <ul>
                    {contacts.map((contact, index) => <ContactsItem key={index} {...contact}/>)}
                </ul>
            </div>
        </section>
    )
}