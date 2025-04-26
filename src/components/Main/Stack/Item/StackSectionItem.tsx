
type StackSectionItemProps = {
    className: string;
    id: string;
    title: string;
    isMobileOrTablet: boolean
  };


export default function StackSectionItem({className, id, title, isMobileOrTablet}: StackSectionItemProps) {
    return (
        <li>
            {!isMobileOrTablet ? <div className="decorative-element"></div> : null }
            <div className={"container " + className}>
                <svg width='100px' height='100px'>
                    <use href={`#${id}`}></use>
                </svg>
                <span>{title}</span>
            </div>
        </li>
    )
}