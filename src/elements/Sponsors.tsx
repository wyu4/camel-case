import { useEffect, useState, type JSX } from "react";
import Line from "./Line";
import Plack from "./Plack";
import { getImagePath, SPONSORS_API } from "../global/APIHelpers";

type SectionProps = {
    tier: string;
    data: SponsorProps[];
};

function Section({ tier, data }: SectionProps) {
    // Each tier / section
    return (
        // Inlined img generator
        <div className="tier">
            <h3>{tier}</h3>
            <div className="content">
                {data.map((sponsor, i) => (
                    <img
                        key={`${sponsor.name}-${i}`}
                        src={getImagePath(sponsor.icon)}
                        draggable={false}
                    />
                ))}
            </div>
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
        Object.entries(sponsorsData.tiers).forEach(([tier, data]) => {
            if (data.length > 0) {
                tempSections.push(
                    <Section key={`${tier}`} tier={tier} data={data} />
                );
            }
        });
        setSectionElements(tempSections);
    }, [sponsorsData]);

    return (
        <section className="sponsors">
            <div className="ceiling">
                <div className="layer-1"></div>
            </div>
            <div className="info">
                <Plack className="about">
                    <h2>Sponsors</h2>
                    <Line />
                    <p>
                        For more information, see our{" "}
                        <u>
                            <a href="/sponsorship/" target="_blank">
                                sponsorship package
                            </a>
                        </u>
                        .
                    </p>
                </Plack>

                <Plack className="contact">
                    <h2>Contact us!</h2>
                    <Line />
                    <div className="contacts">
                        <a className="mail" href="mailto:camelcasehackathon@gmail.com">
                            <span className="material-icons">mail_outline</span>
                        </a>
                    </div>
                </Plack>
            </div>

            <div className="tiers">{sectionElements}</div>
        </section>
    );
}
