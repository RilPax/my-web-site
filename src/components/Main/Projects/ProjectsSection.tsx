import { projects } from '../../../utils/projects'
import ProjectsItem from './ProjectItem/Projectsitem'
import './ProjectsSection.scss'

export default function ProjectsSection() {
    return (
        <section className='projects' id='projects'>
            <h2 className="projects__heading">Projects</h2>
            <div className="projects__info">
                <h3>You can also check few of My works :)</h3>
                <ul>{
                    projects.map((project, index) => <ProjectsItem key={index} {...project}/>)
                    }
                </ul>
            </div>
        </section>
    )
}