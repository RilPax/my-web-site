type ProjectsItemProps = {
    src: string;
    title: string;
    description: string;
    link: string;
    git: string
}

export default function ProjectsItem({src, title, description, link, git}: ProjectsItemProps) {
    return (
        <li>
            <div className="image_container">
                <img src={src} alt={title} />
                <div className="shadow"></div>
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="info__links">
                    <a href={link} target="_blank" rel="noopener noreferrer">Go to site</a>
                    <a href={git} target="_blank" rel="noopener noreferrer">Watch more</a>
                </div>
            </div>
        </li>
    )
}