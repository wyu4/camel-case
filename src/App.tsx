import "./css/App.css";

import { useEffect, useRef, useState } from "react";
import TopBar from "./elements/TopBar";
import TitleBanner from "./elements/TitleBanner";
import Intro from "./elements/Intro";
import Mission from "./elements/Mission";
import Agenda from "./elements/Agenda";
import Judges from "./elements/Judges";
import Sponsors from "./elements/Sponsors";
import FAQ from "./elements/FAQ";
import Footer from "./elements/Footer";

export default function App() {
    const [viewWidth, setViewWidth] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const background = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        const handleWindowResize = () => {
            const viewport = window.visualViewport;
            if (!viewport) return;
            
            setViewWidth(viewport.width?.valueOf());
            setViewHeight(viewport.height?.valueOf());

            console.log(viewport.height?.valueOf());
        };
        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("scroll", handleScroll); // Track the scroll position

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="production background" ref={background} />
            <div className="production container">
                <TopBar
                    scrollPosition={scrollPosition}
                    viewHeight={viewHeight}
                />
                <TitleBanner />
                <Intro />
                <Mission />
                <Agenda />
                <Judges />
                <Sponsors />
                <FAQ />
                <Footer />
                <section></section>
            </div>
        </>
    );
}
