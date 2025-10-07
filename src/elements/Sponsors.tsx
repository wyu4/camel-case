import { useEffect, useState, type JSX } from "react";
import Line from "./Line";
import Plack from "./Plack";
import { getImagePath, SPONSORS_API } from "../global/APIHelpers";
import EmailLink from "./EmailLink";
import Jukebox from "./Guide";

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
                    data={tiers.kilobyte.concat(tiers.byte)}
                />
            );
        }

        if (tiers.megabyte.length > 0) {
            tempSections.push(<Section size="medium" data={tiers.megabyte} />);
        }

        if (tiers.gigabyte.length > 0) {
            tempSections.push(<Section size="big" data={tiers.gigabyte} />);
        }

        setSectionElements(tempSections);
    }, [sponsorsData]);

    return (
        <section className="sponsors">
            <div className="ceiling"></div>
            <div className="info">
                <Plack>
                    <h2>Sponsor Us!</h2>
                    <Line />
                    <div className="about">
                        <p>
                            Wanna help us make this event possible? Feel free to
                            reach out to us at <EmailLink />.
                        </p>
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
        </section>
    );
}
