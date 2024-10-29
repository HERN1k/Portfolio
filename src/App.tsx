import { FC, useEffect, useState } from "react";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Particles from "./components/Particles.tsx";
import Page from "./components/Page.tsx";
import { MOBILE } from "../src/Constants.ts";
import Menu from "./components/Menu.tsx";
import BurgerMenu from "./components/BurgerMenu.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";

const App: FC = () => {

    const [menu, setMenu] = useState<JSX.Element>();
    
    useEffect(() => {
        const handleResize = () => {
            const isMobile: boolean = window.innerWidth <= MOBILE;
            setMenu(isMobile ? <BurgerMenu /> : <Menu />);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <Particles>
            <ErrorBoundary>
                { menu }

                <Page id="homeId">
                    <Home />
                </Page>
                <Page id="aboutId">
                    <About />
                </Page>
                <Page id="projectsId">
                    <></>
                </Page>

                <Footer />
            </ErrorBoundary>
        </Particles>
    );
}

export default App;