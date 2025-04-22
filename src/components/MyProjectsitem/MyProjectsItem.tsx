type MyProjectsItemProps = {
    src: string,
    title: string,
    info: string
}

export default function MyProjectsItem({src, title, info}: MyProjectsItemProps) {
    return (
        <li className="my_projects__item">
            <div className="my_projects__item-mask"></div>
            <div className="my_projects__item-image-container">
                <span className="my_projects__item-title">{title}</span>
                <div className="my_projects__item-image">
                    <img src={src} alt="project image" />
                </div>
            </div>
            <div className="my_projects__item-description">
                <span>Description</span>
                <p>{info}</p>
            </div>
        </li>
    )
}