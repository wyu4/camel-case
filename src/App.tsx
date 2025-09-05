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

const SCHEDULE_API = "https://raw.githubusercontent.com/wyu4/storage/refs/heads/main/schedule.json";
const JUDGES_API = "https://raw.githubusercontent.com/wyu4/storage/refs/heads/main/judges.json";

export default function App() {
    const [windowProps, setWindowProps] = useState<WindowProps>({
        scrollPosition: 0,
        viewWidth: 0,
        viewHeight: 0,
    });
    const [scheduleData, setScheduleData] = useState<ScheduleProps>([]);
    const [judgesData, setJudgesData] = useState<GroupProps>({
        judges: [],
        mentors: []
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

        const getSchedule = async () => {
            try {
                const response = await fetch(SCHEDULE_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`)
                }
                const formattedResult : ScheduleProps = await response.json();
                setScheduleData(formattedResult);
            } catch (e: unknown) {
                console.error(`Couldn't get schedule: ${e}`);
            }
        }

        const getJudges = async () => {
            try {
                const response = await fetch(SCHEDULE_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`)
                }
                const formattedResult : ScheduleProps = await response.json();
                setScheduleData(formattedResult);
            } catch (e: unknown) {
                console.error(`Couldn't get schedule: ${e}`);
            }
        }

        getSchedule();

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
                <div className="invisible" style={{height:"20vh"}} />
                <Mission />
                <div className="invisible" style={{height:"20vh"}} />
                <Agenda schedule={scheduleData} />
                <div className="invisible" style={{height:"20vh"}} />
                <Judges people={judgesData} />
                <Sponsors />
                <FAQ />
                <Footer />
                <section></section>
            </div>
        </>
    );
}
