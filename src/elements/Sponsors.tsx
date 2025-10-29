import { useEffect, useRef, useState, type JSX } from "react";
import Line from "./Line";
import Plack from "./Plack";
import { getImagePath, SPONSORS_API } from "../global/APIHelpers";
import JungleImage from "/images/JungleBackground.svg";
import Contacts from "./Contacts";

type SectionProps = {
    size?: string;
    data: SponsorProps[];
};

function Section({ size = "small", data }: SectionProps) {
    // Each tier / section
    return (
        // Inlined img generator
        <div className="section">
            {data.map((sponsor, i) => (
                <img
                    className={size}
                    key={`${sponsor.name}-${i}`}
                    src={getImagePath(sponsor.icon)}
                    draggable={false}
                    alt={sponsor.name}
                />
            ))}
        </div>
    );
}

export default function Sponsors() {
    const [sponsorsData, setSponsorsData] = useState<AllSponsorsProps>({
        tiers: {
            byte: [],
            kilobyte: [],
            megabyte: [],
            gigabyte: [],
        },
        package: "",
    });
    const [sectionElements, setSectionElements] = useState<
        (JSX.Element | null)[]
    >([]);

    const sectionRef = useRef<HTMLDivElement>(null);
    const [middleY, setMiddleY] = useState(0);

    useEffect(() => {
        if (sectionRef.current) {
            setMiddleY(
                window.screenY +
                    window.innerHeight / 2 -
                    sectionRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, window.innerHeight, sectionRef]);

    useEffect(() => {
        // Get the sponsors data
        const getSponsors = async () => {
            try {
                const response = await fetch(SPONSORS_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`);
                }
                const formattedResult: AllSponsorsProps = await response.json();
                setSponsorsData(formattedResult);
            } catch (e: unknown) {
                console.error(`Couldn't get sponsors: ${e}`);
            }
        };
        getSponsors();
    }, []);

    useEffect(() => {
        // Generate sections for tiers with sponsor logos when data is recieved
        const tempSections: JSX.Element[] = [];
        const { tiers } = sponsorsData;

        if (tiers.kilobyte.length > 0 || tiers.byte.length > 0) {
            tempSections.push(
                <Section
                    size="small"
                    key={"small" + Math.random()}
                    data={tiers.kilobyte.concat(tiers.byte)}
                />
            );
        }

        if (tiers.megabyte.length > 0) {
            tempSections.push(
                <Section
                    size="medium"
                    key={"medium" + Math.random()}
                    data={tiers.megabyte}
                />
            );
        }

        if (tiers.gigabyte.length > 0) {
            tempSections.push(
                <Section
                    size="big"
                    key={"big" + Math.random()}
                    data={tiers.gigabyte}
                />
            );
        }

        setSectionElements(tempSections);
    }, [sponsorsData]);

    return (
        <section id="sponsors" className="sponsors" ref={sectionRef}>
            <img className="background" src={JungleImage} style={{
                transform: `translateX(-50%) translateY(calc(40% + ${middleY * 0.05}px))`
            }}/>
            <div className="info">
                <Plack>
                    <h2>Sponsor Us!</h2>
                    <Line />
                    <div className="about">
                        <p>
                            Wanna help us make this event possible? Feel free to
                            reach out to us!
                        </p>
                        <Contacts />
                        <i>
                            For more information, see our{" "}
                            <u>
                                <a href="/sponsorship/" target="_blank">
                                    sponsorship package
                                </a>
                            </u>
                            .
                        </i>
                        <div className="tiers">{sectionElements}</div>
                    </div>
                </Plack>
            </div>
            <Ceiling />
        </section>
    );
}

function Ceiling() {
    const ceilingRef = useRef<HTMLDivElement>(null);
    const [ceilingY, setCeilingY] = useState(0);

    const parallax1 = 0.01;
    const parallax2 = 0.02;
    const parallax3 = 0.03;
    const parallax4 = 0.04;

    useEffect(() => {
        if (ceilingRef.current) {
            setCeilingY(
                window.screenY - ceilingRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, ceilingRef]);

    return (
        <div className="ceiling" ref={ceilingRef}>
            <div
                className="layer l1"
                style={{
                    transform: `translateY(calc(${
                        ceilingY * parallax1
                    }px + 5%))`,
                }}
            >
                <div className="left">
                    <div className="environment-glow" />
                </div>
                <div className="right">
                    <div className="environment-glow" />
                </div>
            </div>
            <div
                className="layer l2"
                style={{
                    transform: `translateY(calc(${
                        ceilingY * parallax2
                    }px + 10%))`,
                }}
            >
                <div className="left">
                    <div className="environment-glow" />
                </div>
                <div className="right">
                    <div className="environment-glow" />
                </div>
            </div>
            <div
                className="layer l3"
                style={{
                    transform: `translateY(calc(${
                        ceilingY * parallax3
                    }px + 15%))`,
                }}
            >
                <div className="left">
                    <div className="environment-glow" />
                </div>
                <div className="right">
                    <div className="environment-glow" />
                </div>
            </div>
            <div
                className="layer l4"
                style={{
                    transform: `translateY(calc(${
                        ceilingY * parallax4
                    }px + 20%))`,
                }}
            >
                <div className="left">
                    <div className="environment-glow" />
                </div>
                <div className="right">
                    <div className="environment-glow" />
                </div>
            </div>
        </div>
    );
}
