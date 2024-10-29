import { FC, useEffect, useState } from "react";
import MenuMobile from "../components/MenuMobile";
import MenuPC from "../components/MenuPC";
import { MOBILE } from "../Constants";

const Menu: FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= MOBILE);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (isMobile ? <MenuMobile /> : <MenuPC />);
}

export default Menu;