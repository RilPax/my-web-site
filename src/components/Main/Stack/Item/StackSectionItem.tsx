
type StackSectionItemProps = {
    className: string;
    id: string;
    title: string;
  };


export default function StackSectionItem({className, id, title}: StackSectionItemProps) {
    return (
        <li>
            <div className="decorative-element"></div>
            <div className={"container " + className}>
                <svg width='100px' height='100px'>
                    <use href={`#${id}`}></use>
                </svg>
                <span>{title}</span>
            </div>
        </li>
    )
}