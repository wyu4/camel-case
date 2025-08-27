import "./css/App.css";

import { useRef } from "react";
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
    const background = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="production background" ref={background} />
            <div className="production container">
                <TopBar />
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
