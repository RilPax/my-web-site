type TopNaviModalProps = {
    classList: string
}

export default function TopNaviModal({classList}: TopNaviModalProps) {
    return (
        <div className={classList}>
            <div className="top_navi__tabs">
                <a href="#about">About</a>
                <a href="#stack">Stack</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
                <a href="files/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div> 
        </div>
    )
}