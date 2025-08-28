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
    const [windowProps, setWindowProps] = useState<WindowProps>({
        scrollPosition: 0,
        viewWidth: 0,
        viewHeight: 0,
    });

    const background = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setWindowProps((last) => ({
                ...last,
                scrollPosition: window.scrollY,
            }));
        };

        const handleWindowResize = () => {
            const viewport = window.visualViewport;
            if (!viewport) return;

            setWindowProps((last) => ({
                ...last,
                viewWidth: viewport.width?.valueOf(),
                viewHeight: viewport.height?.valueOf(),
            }));
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
                <TopBar {...windowProps} />
                <TitleBanner {...windowProps} />
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
