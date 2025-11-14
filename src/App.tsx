import "./css/App.css";

import { useEffect, useRef, useState } from "react";
import TopBar from "./elements/TopBar";
import TitleBanner from "./elements/TitleBanner";
import Intro from "./elements/Intro";
import Agenda from "./elements/Agenda";
import Sponsors from "./elements/Sponsors";
import FAQ from "./elements/FAQ";
import Footer from "./elements/Footer";
import Guide from "./elements/Guide";
import Merch from "./elements/Merch";
import { Analytics } from "@vercel/analytics/react";

const ANALYTICS = import.meta.env.VITE_ANALYTICS;
const ROBOT = import.meta.env.VITE_ROBOT;

const robotsMeta = document.createElement("meta");
robotsMeta.name = "robots";
robotsMeta.content = ROBOT || "noindex, nofollow";
document.head.appendChild(robotsMeta);

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
            <AnalyticsIfEnabled />
            <div className="production background" ref={background} />
            <div className="production container">
                <TopBar {...windowProps} />
                <TitleBanner {...windowProps} />
                <Intro />
                <Agenda />
                <Guide />
                <Merch />
                <Sponsors />
                <FAQ />
                <Footer />
            </div>
        </>
    );
}

function AnalyticsIfEnabled() {
    return ANALYTICS === undefined || ANALYTICS != "1" ? null : <Analytics />;
}
