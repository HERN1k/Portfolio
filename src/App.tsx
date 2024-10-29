import { FC } from "react";
import About from "./pages/About.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Footer from "./components/Footer.tsx";
import Page from "./components/Page.tsx";
import Particles from "./components/Particles.tsx";
import Home from "./pages/Home";
import Menu from "./pages/Menu.tsx";
import Resume from "./pages/Resume.tsx";

const App: FC = () => {
    return (
        <Particles>
            <ErrorBoundary>
                <Menu />

                <Page id="homeId" children={<Home />} />
                <Page id="aboutId" children={<About />} />
                <Page id="projectsId" children={<></>} />
                <Page id="resumeId" children={<Resume />} />

                <Footer />
            </ErrorBoundary>
        </Particles>
    );
}

export default App;