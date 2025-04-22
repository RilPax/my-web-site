import AboutMeSpan from '../AboutMeSpan/AboutMeSpan'
import { about_me } from '../../utils/about_me'

import './AboutMeSection.scss'



export default function AboutMeSection() {

    return (
        <section className='about_me'>
            <h3 className='about_me__title'>About me</h3>
            <p className='about_me__paragraph'>
                {about_me.map((title, index) => 
                <AboutMeSpan key={index} title={title} className={'about_me__paragraph-component'} />
                )}
            </p>
        </section>
    )
}