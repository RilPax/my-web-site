
import "./Cursor.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(CustomEase);

CustomEase.create("shadow", ".24,-0.45,.57,1.96");

export default function Cursor() {

    const tabletOrMobile = useMediaQuery({maxWidth: '769px'})

    const cursorRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const links = document.querySelectorAll('a');

        const scaleShadow = (isActive: boolean) => {
            gsap.to(shadowRef.current, {
                scale: isActive ? 1.4 : 1,
                duration: 0.2,
                ease: "shadow"
            });
        };

        const toggleCursorActive = (isActive: boolean) => {
            cursorRef.current?.classList.toggle('cursor-active', isActive);
        };

        const handleLinkHover = (isActive: boolean) => {
            scaleShadow(isActive);
            toggleCursorActive(isActive);
        };

        const onLinkMouseEnter = () => handleLinkHover(true);
        const onLinkMouseLeave = () => handleLinkHover(false);

        links.forEach(link => {
            link.addEventListener('mouseover', onLinkMouseEnter);
            link.addEventListener('mouseout', onLinkMouseLeave);
        });

        const updateCursorPosition = (event: MouseEvent) => {
            const { clientX, clientY } = event;

            gsap.to(cursorRef.current, {
                x: clientX - 4,
                y: clientY - 4,
                duration: 0.1,
                ease: 'power3.out'
            });

            gsap.to(shadowRef.current, {
                x: clientX - 12,
                y: clientY - 12,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            links.forEach(link => {
                link.removeEventListener('mouseover', onLinkMouseEnter);
                link.removeEventListener('mouseout', onLinkMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {!tabletOrMobile && <> 
                <div ref={cursorRef} className="cursor"></div>
                <div ref={shadowRef} className="cursor__shadow"></div>
            </>
            }
        </>
    );
}
