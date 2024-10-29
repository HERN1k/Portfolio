import { FC, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { MOBILE } from "../Constants";
import pdf from "/Vlad_Hirnyk.pdf";
import styles from "../styles/Resume.module.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { DownloadSvg } from "../components/Svgs";

const Resume: FC = () => {

    const [width, setWidth] = useState<number>(300);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Vlad_Hirnyk.pdf";
        link.download = "Vlad Hirnyk CV.pdf";
        link.click();
    };

    useEffect(() => {
        const updateWidth = () => {
            const fontSize: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

            if (window.innerWidth <= MOBILE) {
                if (window.visualViewport?.height) {
                    setWidth(window.visualViewport.width - (fontSize * 4));
                } else {
                    setWidth(window.innerWidth - (fontSize * 4));
                }
            } else {
                if (window.visualViewport?.height) {
                    setWidth((window.visualViewport.width - (fontSize * 4)) / 100 * 40);
                } else {
                    setWidth((window.innerWidth - (fontSize * 4)) / 100 * 40);
                }
            }
        }

        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            "pdfjs-dist/build/pdf.worker.min.mjs",
            import.meta.url,
        ).toString();

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.pdfContainer}>
                <Document file={pdf}>
                    <Page pageNumber={1} scale={1} width={width} />
                </Document>
            </div>
            
            <div className={styles.button} onClick={handleDownload}>
                <div className={styles.buttonInnerContainer}>
                    <DownloadSvg className={styles.buttonSvg} />
                    <h2 className={styles.buttonText}>Download CV</h2>
                </div>
            </div>
        </div>
    );
}

export default Resume;