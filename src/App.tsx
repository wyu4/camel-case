import "./css/App.css";

import { useRef } from "react";
import TopBar from "./elements/TopBar";
import TitleBanner from "./elements/TitleBanner";
import Intro from "./elements/Intro";

export default function App() {
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
