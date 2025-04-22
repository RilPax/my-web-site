type SpanProps = {
    title: string;
    className: string 
}

export default function AboutMeSpan({ title, className}: SpanProps) {
    return (
        <span className={className}>{title}</span>
    )
}