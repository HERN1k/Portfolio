import { FC, useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import { useInView } from "react-intersection-observer";

const Title: FC = () => {

    const [titleClass, setTitleClass] = useState<string>(styles.textHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setTitleClass(styles.titleVisible);
        } else {
            setTitleClass(styles.titleHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref}>
            <h1 className={`${styles.title} ${titleClass}`}>
                LET ME <span className={styles.spanTitle}>INTRODUCE</span> MYSELF
            </h1>
        </div>
    );
}

const Introduce: FC = () => {

    const [textClass, setTextClass] = useState<string>(styles.textHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setTextClass(styles.textVisible);
        } else {
            setTextClass(styles.textHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref}>
            <h2 className={`${styles.text} ${textClass}`}>
                I’m a beginner <span className={styles.spanText}>.NET developer,</span> excited to dive into the world of backend development and grow my <span className={styles.spanText}>skills.</span><br />
                <br />
                I have a solid foundation in <span className={styles.spanText}>C#, JavaScript, and R,</span> and I’m eager to apply my knowledge in real-world projects.<br />
                <br />
                My interests lie in developing efficient <span className={styles.spanText}>backend systems,</span> exploring modern <span className={styles.spanText}>web technologies,</span> and creating <span className={styles.spanText}>data-driven solutions.</span><br />
                <br />
                As I start my journey, I look forward to contributing to projects using <span className={styles.spanText}>.NET</span> technologies and learning from experienced developers to become a skilled backend engineer.
            </h2>
        </div>
    );
}

const Me: FC = () => {

    const [imgClass, setImgClass] = useState<string>(styles.imgHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setImgClass(styles.imgVisible);
        } else {
            setImgClass(styles.imgHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref} className={`${styles.imgContainer} ${imgClass}`}>
            <div className={styles.gradient}></div>
            <img src="/me.webp" className={styles.img} />
        </div>
    );
}

const About: FC = () => {

    
    return (
        <div className={styles.container}>
            <Title />
            <Introduce />
            <Me />
        </div>
    );
}

export default About;