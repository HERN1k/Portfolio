import { FC, MouseEvent, useState } from "react";
import "../styles/Menu.css";
import { AboutSvg, HomeSvg, ProjectsSvg, ResumeSvg } from "./Svgs.tsx";

const Menu : FC = () => {

    const [headerHeight] = useState<number>(() => {
        return parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;
    });


    const onMenuItemClick = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
        const elementId: string = `${e.currentTarget.id}Id`
        const element: HTMLElement | null = document.getElementById(elementId);

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    return (
        <div className="header-container" id="header">
            <div className="center-container">
                <div id="home" className="nickname-base" onClick={onMenuItemClick}>
                    <strong>HERN1k</strong>
                </div>

                <div onClick={onMenuItemClick} id="home" className="link-item-base">
                    <HomeSvg className="svg-item-base" />
                    Home
                    <div className="underline" />
                </div>

                <div onClick={onMenuItemClick} id="about" className="link-item-base">
                    <AboutSvg className="svg-item-base" />
                    About
                    <div className="underline" />
                </div>
                
                <div onClick={onMenuItemClick} id="projects" className="link-item-base">
                    <ProjectsSvg className="svg-item-base" />
                    Projects
                    <div className="underline" />
                </div>
                <div onClick={onMenuItemClick} id="projects" className="link-item-base">
                    <ResumeSvg className="svg-item-base" />
                    Resume
                    <div className="underline" />
                </div>
            </div>
        </div>
    );
}



export default Menu;