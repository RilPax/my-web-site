type ProjectsItemProps = {
    src: string;
    title: string;
    description: string
}

export default function ProjectsItem({src, title, description}: ProjectsItemProps) {
    return (
        <li>
            <div className="image_container">
                <img src={src} alt={title} />
                <div className="shadow"></div>
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </li>
    )
}