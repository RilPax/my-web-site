import AboutSection from './About/AboutSection'
import ContactsSection from './Contacts/Contacts'
import ProjectsSection from './Projects/ProjectsSection'
import StackSection from './Stack/StackSection'

import './Main.scss'

export default function Main() {
    return (
        <main className='main'>
            <AboutSection />
            <StackSection />
            <ProjectsSection />
            <ContactsSection />
        </main>
    )
}