import { useEffect, useState } from 'react';
import './TopNavi.scss'

export default function TopNavi() {

    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setShowNav(true); // в самом верху — показываем
            } else if (currentScrollY > lastScrollY) {
                setShowNav(false); // скролл вниз — скрываем
            } else {
                setShowNav(true); // скролл вверх — показываем
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`top_navi ${!showNav ? 'top_navi--hidden' : ''}`}>
            <a href="#main">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M128 24C70.5624 24 24 70.5624 24 128V384C24 441.438 70.5624 488 128 488H384C441.438 488 488 441.438 488 384V128C488 70.5624 441.438 24 384 24H128ZM40 128C40 79.3989 79.3989 40 128 40H384C432.601 40 472 79.3989 472 128V384C472 432.601 432.601 472 384 472H128C79.3989 472 40 432.601 40 384V128ZM200 100C175.699 100 156 119.699 156 144V384C156 399.464 168.536 412 184 412C199.464 412 212 399.464 212 384V284H257.271L336.927 399.863C345.688 412.606 363.12 415.834 375.863 407.073C388.606 398.312 391.834 380.88 383.073 368.137L322.553 280.108C360.419 268.711 388 233.582 388 192C388 141.19 346.81 100 296 100H200ZM172 144C172 128.536 184.536 116 200 116H296C337.974 116 372 150.026 372 192C372 229.871 344.292 261.286 308.044 267.052C305.333 267.484 303.032 269.275 301.949 271.798C300.866 274.321 301.153 277.223 302.708 279.485L369.888 377.202C373.643 382.663 372.26 390.134 366.798 393.888C361.337 397.643 353.866 396.26 350.112 390.798L268.072 271.468C266.579 269.297 264.114 268 261.479 268H204C199.582 268 196 271.582 196 276V384C196 390.627 190.627 396 184 396C177.373 396 172 390.627 172 384V144ZM204 140C199.582 140 196 143.582 196 148V236C196 240.418 199.582 244 204 244H296C324.719 244 348 220.719 348 192C348 163.281 324.719 140 296 140H204ZM212 228V156H296C315.882 156 332 172.118 332 192C332 211.882 315.882 228 296 228H212Z" />
                </svg>
            </a>
            <div className="top_navi__tabs">
                <a href="#about">About</a>
                <a href="#stack">Stack</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
                <a href="files/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </nav>
    );
}



