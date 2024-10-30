import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GitHubSvg } from "../components/Svgs";
import { IProjectItem } from "../Types";
import styles from "../styles/Projects.module.css";

const Title: FC = () => {

    const [titleClass, setTitleClass] = useState<string>(styles.titleHidden);
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
        <div ref={ref} className={styles.titleContainer}>
            <h1 className={`${styles.title} ${titleClass}`}>
                My Recent <span className={styles.spanTitle}>Projects</span>
            </h1>
            <h2 className={`${styles.text} ${textClass}`}>
                Here are a few projects I've worked on recently
            </h2>
        </div>
    );
}

const ListItem: FC<IProjectItem> = ({ data }) => {

    const [opacityClass, setOpacityClass] = useState<string>(styles.textHidden);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setOpacityClass(styles.textVisible);
        } else {
            setOpacityClass(styles.textHidden);
        }   
    }, [inView]);

    return (
        <div ref={ref} className={`${styles.listItem} ${opacityClass}`}>
            <img src={data.src} alt="Error :(" className={styles.image} />
            <h2 className={styles.listTitle}>{data.title}</h2>
            <h3 className={styles.listText}>{data.text}</h3>
            <p className={styles.listDate}>{data.date}</p>
            {
                data.link 
                    ? <a className={styles.button} target="_blank" href={data.link}>
                        <div className={styles.buttonContainer}>
                            <GitHubSvg className={styles.buttonSvg} />
                            <p className={styles.buttonText}><strong>GitHub</strong></p>
                        </div>
                    </a>
                    : <></>
            }
        </div>
    );
}

const ProjectsList: FC = () => {

    const [projects] = useState<IProjectItem[]>([
        {
            data: {
                src: "/project_stp.webp",
                title: "Student Testing Platform",
                text: "🎓 This is client application for my university thesis project, a platform aimed at streamlining the exam process for both students and faculty. Built with .NET MAUI, it enables efficient interaction and simplifies exam-related tasks for all users involved.",
                date: "Oct 2024 - Present",
                link: "https://github.com/HERN1k/Student-Testing-Platform",
            }
        },
        {
            data: {
                src: "/project_t_bot.webp",
                title: "E-COMMERCE BOT WITH CRM FEATURES",
                text: "📱 A multi-functional Telegram bot for e-commerce, featuring a product catalog, order management, store location search on a map, feedback collection, order history, and a web admin panel for managing products and bot settings.",
                date: "Sep 2024 - Oct 2024"
            }
        },
        {
            data: {
                src: "/project_tt.webp",
                title: "Time tracker",
                text: "⌚️ Desktop app for tracking PC work hours. It provides detailed time stats, lets you view usage insights, and works seamlessly in the tray or as a regular app. Perfect for managing productivity on Windows!",
                date: "Apr 2024",
                link: "https://github.com/HERN1k/Time-tracker",
            }
        },
        {
            data: {
                src: "/project_3d_viewer.webp",
                title: "Viewer3D",
                text: "🖥️ Desktop app for real-time rendering and viewing of 3D models, featuring a variety of customization settings. It supports .obj files for straightforward 3D visualization, without materials or textures.",
                date: "Apr 2024 - May 2024",
                link: "https://github.com/HERN1k/Viewer3D",
            }
        }
    ]);

    return (
        <div className={styles.listContainer}>
            { projects.map((project) => <ListItem data={project.data} />) }
        </div>
    );
}

const Projects: FC = () => {
    return (
        <div className={styles.container}>
            <Title />
            <ProjectsList />
        </div>
    );
}

export default Projects;