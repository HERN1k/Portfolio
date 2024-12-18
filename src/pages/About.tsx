import { FC, useEffect, useState } from "react";
import AboutMobile from "../components/AboutMobile";
import AboutPC from "../components/AboutPC";
import { MOBILE } from "../Constants";

const About: FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= MOBILE);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (isMobile ? <AboutMobile /> : <AboutPC />);
}

export default About;