import './header.scss'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header_title">Hello, i`m Ruslan</h1>
      <div className="header_image-container">
        <img src="./" alt="photo" className="header_image" />
      </div>
      <span className="header_span">Welcome to my Web Site</span>
    </header>
  )
}