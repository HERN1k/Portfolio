import { FC, useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { HandSvg } from "../components/Svgs.tsx";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";

const createTyped = (typed: React.MutableRefObject<Typed | null>, typedRef: React.MutableRefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
        typed.current = new Typed(typedRef.current as Element, {
            strings: [
                ".NET Software Developer",
                "Freelancer",
                "Gym rat",
                "Student",
            ],
            typeSpeed: 75,
            backSpeed: 75,
            backDelay: 1000,
            loop: true,
            autoInsertCss: true,
            showCursor: true,
            cursorChar: '|',
        });
    }, 1000);
}

const destroyTyped = (typed: React.MutableRefObject<Typed | null>) => typed.current?.destroy();

const Home: FC = () => {

    const [textClass, setTextClass] = useState<string>(styles.textHidden);
    const [imgClass, setImgClass] = useState<string>(styles.imgHidden);

    const typedRef = useRef<HTMLDivElement | null>(null);
    const typed = useRef<Typed | null>(null);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setImgClass(styles.imgVisible);
            setTextClass(styles.textVisible);
            createTyped(typed, typedRef);
        } else {
            setImgClass(styles.imgHidden);
            setTextClass(styles.textHidden);
            destroyTyped(typed);
        } 

        return () => destroyTyped(typed);   
    }, [inView]);
 
    return (
        <div className={styles.homeContainer} ref={ref}>
            <div className={`${styles.textContainer} ${textClass}`}>
                <h1 className={styles.homeTitle}>
                    Hi There!
                    <div style={{ transform: "rotate(15deg)" }}>
                        <HandSvg className={styles.homeHand} />
                    </div>
                </h1>
                <h1 className={styles.homeTitle}>
                    I'M 
                    <span className={styles.homeTitleSpan}>
                        <strong>VLAD HIRNYK</strong>
                        <div className={styles.aurora}>
                            <div className={styles.auroraItem}></div>
                            <div className={styles.auroraItem}></div>
                            <div className={styles.auroraItem}></div>
                            <div className={styles.auroraItem}></div>
                        </div>
                    </span>
                </h1>
                <div className={styles.typedText}>
                    <span ref={typedRef} />
                </div>
            </div>

            <div className={`${styles.imageContainer}`}>
                <img src="/programmer.webp" className={`${styles.homeImg} ${imgClass}`} /> 
            </div>
        </div>
    )
}
  
export default Home;