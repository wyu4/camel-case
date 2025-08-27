import "./../css/production/ProductionApp.css";

import { useRef } from "react";
import TopBar from "../elements/production/TopBar";
import TitleBanner from "../elements/production/TitleBanner";
import Intro from "../elements/production/Intro";

export default function ProductionPage() {
    const background = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="production background" ref={background} />
            <div className="production container">
                <TopBar />
                <TitleBanner />
                <Intro />
                <section></section>
            </div>
        </>
    );
}
