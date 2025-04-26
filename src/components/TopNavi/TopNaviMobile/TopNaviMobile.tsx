import TopNaviModal from "../TopNaviModal/TopNaviModal";
import { useState } from 'react'
import './TopNaviMobile.scss'

export default function TopNaviMobile() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    let modalClass = clicked ? 'top_navi__mobile__modal' : 'top_navi__mobile__modal top_navi__mobile__modal--hidden';
    let buttonClass = clicked ? 'active' : ''
    return (
        <div className="top_navi__mobile">
            <button type='button' className={buttonClass} onClick={() => handleClick()}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <TopNaviModal classList={modalClass}/>
        </div>
    )
}