import { FC, MouseEvent, useState } from "react";
import { AboutSvg, HomeSvg, ProjectsSvg, ResumeSvg, BurgerButton } from "./Svgs.tsx";
import "../styles/Menu.css";

const BurgerMenu : FC = () => {

    const [headerHeight] = useState<number>(() => {
        return parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;
    });

    const preventDefault: (event: Event) => void = (event) => {
        event.preventDefault()
    }

    const toggleMenu: () => void = () => {
        const menu: HTMLElement | null = document.getElementById("BurgerMenuButton");
        const header: HTMLElement | null = document.getElementById("header");
        
        if (menu && header) {
            header.classList.toggle("header-none");

            menu.classList.toggle("opened");
            menu.setAttribute("aria-expanded", menu.classList.contains("opened").toString());
        
            const menuContainer = document.getElementById("menuContainer");
        
            menuContainer?.classList.toggle("menu-main-opened");
        
            if (menu.classList.contains("opened")) {
                document.body.style.overflow = "hidden";
                window.addEventListener("scroll", preventDefault);
                window.addEventListener("wheel", preventDefault, { passive: false });
                window.addEventListener("touchmove", preventDefault, { passive: false });
            } else {
                document.body.style.overflow = "";
                window.removeEventListener("scroll", preventDefault);
                window.removeEventListener("wheel", preventDefault);
                window.removeEventListener("touchmove", preventDefault);
            }
        }
    }

    const onMenuItemClick = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
        const elementId: string = `${e.currentTarget.id}Id`
        const element: HTMLElement | null = document.getElementById(elementId);

        if (element) {
            toggleMenu();
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    const onNicknameClick = () => {
        const element: HTMLElement | null = document.getElementById("homeId");

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
            <a className="nickname" onClick={onNicknameClick}>
                <strong>HERN1k</strong>
            </a>

            <BurgerButton toggleMenu={toggleMenu}/>

            <div id="menuContainer" className="menu-main-container">
                <div className="links">
                    <a onClick={onMenuItemClick} id="home" className="link-item">
                        <HomeSvg className="svg-item" />
                        Home
                    </a>
                    <a onClick={onMenuItemClick} id="about" className="link-item">
                        <AboutSvg className="svg-item" />
                        About
                    </a>
                    <a onClick={onMenuItemClick} id="projects" className="link-item">
                        <ProjectsSvg className="svg-item" />
                        Projects
                        </a>
                    <a onClick={onMenuItemClick} id="projects" className="link-item">
                        <ResumeSvg className="svg-item" />
                        Resume
                    </a>
                </div>
            </div>

            {/* <div className="menu-container">
                
            </div> */}
        </div>
    );
}

export default BurgerMenu;