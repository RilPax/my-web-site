import AboutMeSection from '../AboutMeSection/AboutMeSection'
import ContactsSection from '../Contacts/ContactsSection'
import MyProjectsSection from '../MyProjectsSection/MyProjectsSection'
import StackSection from '../StackSection/StackSection'
import './main.scss'

export default function Main() {
    return (
        <main className='main'>
            <AboutMeSection />
            <StackSection />
            <MyProjectsSection />
            <ContactsSection />
        </main>
    )
}