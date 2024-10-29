import { FC, useEffect } from "react";
import { GitHubSvg, LinkedInSvg, TelegramSvg } from "./Svgs.tsx";
import { MOBILE } from "../Constants.ts";
import "../styles/Footer.css";

const Footer : FC = () => {

    useEffect(() => {
        const handleResize = () => {
            const isMobile: boolean = window.innerWidth <= MOBILE;
            const footer: HTMLElement | null = document.getElementById("footer");
            const container: HTMLElement | null = document.getElementById("footer-container");
            const footerName: HTMLElement | null = document.getElementById("footer-name");
            const footerCopyright: HTMLElement | null = document.getElementById("footer-copyright");
            const footerLinks: HTMLElement | null = document.getElementById("footer-links");

            if (footer && container && footerName && footerCopyright && footerLinks) {
                if (isMobile) {
                    footer.classList.add("mobile-footer");
                    container.classList.add("mobile-footer-container");
                    footerName.classList.add("mobile-footer-item");
                    footerCopyright.classList.add("mobile-footer-item");
                    footerLinks.classList.add("mobile-footer-item");
                } else {
                    footer.classList.remove("mobile-footer");
                    container.classList.remove("mobile-footer-container");
                    footerName.classList.remove("mobile-footer-item");
                    footerCopyright.classList.remove("mobile-footer-item");
                    footerLinks.classList.remove("mobile-footer-item");
                }
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div id="footer" className="footer">
            <div id="footer-container" className="footer-container">
                <h1 id="footer-name" className="footer-name">
                    Designed and Developed by Vlad Hirnyk
                </h1>
                <h1 id="footer-copyright" className="footer-copyright">
                    Copyright © 2024 VH
                </h1>
                <div id="footer-links" className="footer-links">
                    <a className="footer-link" href="https://www.linkedin.com/in/vlad-hirnyk-84654b328">
                        <LinkedInSvg className="footer-link-item" />
                    </a>
                    <a className="footer-link" href="https://github.com/HERN1k">
                        <GitHubSvg className="footer-link-item" />
                    </a>
                    <a className="footer-link" href="https://t.me/hern1k">
                        <TelegramSvg className="footer-link-item" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;