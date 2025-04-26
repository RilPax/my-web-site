import './AboutSection.scss'

export default function AboutSection() {
    return (
        <section className='about' id='about'>
            <h2>About</h2>
            <div className="about__info">
                <div className="about__info__description">
                    <p>
                        <span>Hy! I’m a front-end developer who’s all about building clean, modern, and user-friendly interfaces. I love turning designs into real, responsive web apps using tools like React, TypeScript, and SASS — always keeping things smooth, fast, and accessible.</span>
                        <span>I focus on writing clean code, staying up-to-date with the latest tech, and paying attention to the little details that make a big difference. Whether it’s a landing page, a dashboard, or a full app, I aim to make things look good and work even better.</span>
                        <span>If you're into modern UI and thoughtful development, we’ll probably get along just fine.</span>
                    </p>
                </div>
                <div className="about__info__photo">
                    <img src="/about.jpg" alt="about" />
                </div>
            </div>
        </section>
    )
}