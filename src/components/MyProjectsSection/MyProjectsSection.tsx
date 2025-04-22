import { projects } from '../../utils/projects'
import MyProjectsItem from '../MyProjectsitem/MyProjectsItem'

import './MyProjectsSection.scss';

export default function MyProjectsSection() {
    return (
        <section className="my_projects">
            <svg width="0" height="0" viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute'}}>
              <defs>
                <clipPath id="customClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0 0.1 L 0.4 0.1 L 0.435 0 L 1 0 L 1 1 L 0 1 Z" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="my_projects__title">My projects:</h3>
            <ul className="my_projects__list">
                {projects.map((project, index) => 
                    <MyProjectsItem key={index} {...project}/>
                )}
            </ul>
        </section>
    )
}