import './Header.scss'

export default function Header() {
    return (
        <header className="header" id='main'>
            <div className="header__image">
                <img src="me.jpg" alt="logo" />
            </div>
            <div className="header__description">
                <h1>Normuminov Ruslan</h1>
                <span>I'll build site of your dream</span>
            </div>
        </header>
    )
}