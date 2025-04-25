import './Header.scss'

export default function Header() {
    return (
        <header className="header" id='main'>
            <div className="header__image">
                <img src="me.jpg" alt="logo" />
            </div>
            <div className="header__description">
                <h1>Hy, My name`s</h1>
                <h2>Normuminov Ruslan</h2>
                <span>I build cool things ;)</span>
            </div>
        </header>
    )
}