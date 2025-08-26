import { useRef } from "react";
import TitleBanner from "./TitleBanner";
import TopBar from "./TopBar";

export default function ProductionPage() {
    const background = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="production background" ref={background} />
            <div className="production container">
                <TopBar />
                <TitleBanner />
            </div>
        </>
    );
}
