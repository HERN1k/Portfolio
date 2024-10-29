import { FC, useEffect, useState } from "react";
import { IPage } from "../Types";
import styles from "../styles/Page.module.css";

const Page: FC<IPage> = ({ id, children }) => {

    const [headerHeight] = useState<number>(() => {
        return parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;
    });

    useEffect(() => {
        const handleResize = () => {
            const container = document.getElementById(id);

            if (!container) return;
            
            if (window.visualViewport) 
                container.style.minHeight = `${window.visualViewport?.height - headerHeight}px`;
            else 
                container.style.minHeight = `${window.innerHeight - headerHeight}px`; 
        };

        handleResize();

        // window.addEventListener("resize", handleResize);
        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };
    }, []);

    return (
        <div id={id} className={styles.container}>
            { children }
        </div> 
    )
}

export default Page;