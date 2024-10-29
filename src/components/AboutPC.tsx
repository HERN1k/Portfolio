import { FC, useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useInView } from "react-intersection-observer";
import styles from "../styles/About.module.css";
import {
    AzureSvg,
    CSharpSvg,
    DockerSvg,
    DotMemorySvg,
    DotnetSvg,
    DotPeekSvg,
    GitHubSvg,
    GitSvg,
    JSSvg,
    LinkedInSvg,
    LinuxSvg,
    NginxSvg,
    PostgresqlSvg,
    PostmanSvg,
    ReactSvg,
    RedisSvg,
    TelegramSvg,
    VisualStudioSvg,
    WindowsSvg
} from "./Svgs";

const Introduce: FC = () => {

    const [titleClass, setTitleClass] = useState<string>(styles.textHidden);
    const [textClass, setTextClass] = useState<string>(styles.textHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setTitleClass(styles.titleVisible);
            setTextClass(styles.textVisible);
        } else {
            setTitleClass(styles.titleHidden);
            setTextClass(styles.textHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref}>
            <h1 className={`${styles.title} ${titleClass}`} 
                style={{
                    marginTop: "0",
                    padding: "0",
                    marginBottom: "2rem",
                }}>
                LET ME <span className={styles.spanTitle}>INTRODUCE</span> MYSELF
            </h1>
            <h2 className={`${styles.text} ${textClass}`}>
                My name is <span className={styles.spanText}>Vlad Hirnyk,</span> a 22-year-old <span className={styles.spanText}>.NET</span> developer from Kyiv, Ukraine. I'm a beginner excited to grow in backend development.<br />
                <br />
                With a foundation in <span className={styles.spanText}>C#, JavaScript, and R,</span> I'm eager to apply my skills to real-world projects. My interests include building <span className={styles.spanText}>efficient backend systems</span>, exploring <span className={styles.spanText}>modern web tech</span>, and working on <span className={styles.spanText}>data-driven solutions.</span>
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

const AboutMe: FC = () => {

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
            <h2 className={`${styles.text} ${textClass}`}
                style={{ textAlign: "center" }}>
                Currently, I'm honing my coding skills at the <span className={styles.spanText}>State University of Trade and Economics,</span> where I'm diving deep into the world of tech.<br />
                <br />
                Apart from coding, some other activities that I <span className={styles.spanText}>love to do:</span> <br />
                🎮 Playing Games<br />
                🏋️‍♂️ Gym Enthusiast<br />
            </h2>
        </div>
    );
}

const FindMe: FC = () => {

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
            <h1 className={`${styles.title} ${textClass}`} 
                style={{
                    marginTop: "5rem",
                    marginBottom: "0rem"
                }}>
                FIND ME ON
            </h1>
            <h2 className={`${styles.text} ${textClass}`}
                style={{
                    textAlign: "center",
                    marginBottom: "1rem"
                }}>
                Feel free to <span className={styles.spanText}>connect</span> with me
            </h2>
            <div className={styles.findMeLinksContainer}>
                <a className={styles.findMeLink} href="https://www.linkedin.com/in/vlad-hirnyk-84654b328">
                    <LinkedInSvg className={styles.findMeLinkSvg} />
                </a>
                <a className={styles.findMeLink} href="https://github.com/HERN1k">
                    <GitHubSvg className={styles.findMeLinkSvg} />
                </a>
                <a className={styles.findMeLink} href="https://t.me/hern1k">
                    <TelegramSvg className={styles.findMeLinkSvg} />
                </a>
            </div>
        </div>
    );
}

const Skillset: FC = () => {

    const [titleClass, setTitleClass] = useState<string>(styles.titleHidden);
    const [imgClass, setImgClass] = useState<string>(styles.imgHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setTitleClass(styles.titleVisible);
            setImgClass(styles.imgVisible);
        } else {
            setTitleClass(styles.titleHidden);
            setImgClass(styles.imgHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref}>
            <h2 className={`${styles.title} ${titleClass}`} style={{ marginBottom: "0.5rem" }}>
                Professional <span className={styles.spanTitle}>Skillset</span>
            </h2>
            <div className={`${styles.skillsetContainer} ${imgClass}`}>
                <div className={styles.skillsetItem}>
                    <CSharpSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <DotnetSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <JSSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <ReactSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <NginxSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <GitSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <PostgresqlSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <RedisSvg className={styles.skillsetItemSvg} />
                </div>
            </div>
        </div>
    );
}

const Tools: FC = () => {
    const [titleClass, setTitleClass] = useState<string>(styles.titleHidden);
    const [imgClass, setImgClass] = useState<string>(styles.imgHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setTitleClass(styles.titleVisible);
            setImgClass(styles.imgVisible);
        } else {
            setTitleClass(styles.titleHidden);
            setImgClass(styles.imgHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref}>
            <h1 className={`${styles.title} ${titleClass}`} style={{ marginBottom: "0.5rem" }}>
                <span className={styles.spanTitle}>Tools</span> I use
            </h1>
            <div className={`${styles.skillsetContainer} ${imgClass}`}>
                <div className={styles.skillsetItem}>
                    <WindowsSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <LinuxSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <AzureSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <VisualStudioSvg className={styles.skillsetItemSvg} /> 
                </div>
                <div className={styles.skillsetItem}>
                    <DockerSvg className={styles.skillsetItemSvg} />
                </div>
                <div className={styles.skillsetItem}>
                    <PostmanSvg className={styles.skillsetItemSvg} /> 
                </div>
                <div className={styles.skillsetItem}>
                    <DotMemorySvg className={styles.skillsetItemSvg} /> 
                </div>
                <div className={styles.skillsetItem}>
                    <DotPeekSvg className={styles.skillsetItemSvg} /> 
                </div>
            </div>
        </div>
    );
}

const Calendar : FC = () => {

    const [titleClass, setTitleClass] = useState<string>(styles.titleHidden);
    const [opacity, setOpacity] = useState<number>(0);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setTitleClass(styles.titleVisible);
            setOpacity(1);
        } else {
            setTitleClass(styles.titleHidden);
            setOpacity(0);
        }   
    }, [inView]);

    const selectLastHalfYear = (contributions: any) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;
      
        return contributions.filter((activity: any) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();
            
            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    return (
        <div ref={ref} style={{ 
                opacity: opacity, 
                transition: "all 0.5s ease-in" 
            }}>
            <h1 className={`${styles.title} ${titleClass}`} 
                style={{ 
                    opacity: 1, 
                    marginTop: "4rem",
                    marginBottom: "2rem"
                }}>
                Days | <span className={styles.spanTitle}>Code</span>
            </h1>
            <GitHubCalendar 
                username="HERN1k"
                blockSize={16}
                blockMargin={6}
                weekStart={1}
                year={"last"}
                colorScheme={"dark"}
                theme={{ "light": [
                    "#ebebeb1c",
                    "#5c417a",
                    "#79549d",
                    "#9667c0",
                    "#b27be4"
                ],
                "dark": [
                    "#ebebeb1c",
                    "#632561",
                    "#963994",
                    "#ca4dc6",
                    "#fd61f8"
                ] }}
                maxLevel={4}
                style={{
                    color: "#ffffff",
                    fontFamily: "'Montserrat', sans-serif",
                }}
                transformData={selectLastHalfYear} 
                hideColorLegend={false}
                labels={{
                    totalCount: "{{count}} contributions in the last year",
                }}
                fontSize={18} />
        </div>
    );
}

const AboutPC: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.meContainer}>
                <div className={styles.meIntroduceContainer}>
                    <Introduce />
                </div>
                <Me />
            </div>
            <div className={styles.aboutMeContainer}>
                <AboutMe />
                <FindMe />
            </div>
            <Skillset />
            <Tools />
            <Calendar />
        </div>
    );
}

export default AboutPC;