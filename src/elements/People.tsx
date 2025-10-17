import { useEffect, useState, type JSX } from "react";
import Plack from "./Plack";
import Line from "./Line";
import { getImagePath, PEOPLE_API } from "../global/APIHelpers";



function Person({
    icon = "media/Incognito.svg", // Default to incognito is there isn't an icon property
    name,
    role,
}: PersonPropsWithRole) {
    return (
        <div className={"person rounded " + role}>
            <h3>{name}</h3>
            <img
                className="rounded"
                src={getImagePath(icon)}
                draggable={false}
            />
            <p>{`(${role})`}</p>
        </div>
    );
}

export default function People() {
    const [peopleData, setPeopleData] = useState<GroupProps>({
        judges: [],
        mentors: [],
    });
    const [peopleElements, setpeopleElements] = useState<
        (JSX.Element | null)[]
    >([]);

    useEffect(() => {
        // Get people data
        const getPeople = async () => {
            try {
                const response = await fetch(PEOPLE_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`);
                }
                const formattedResult: GroupProps = await response.json();
                setPeopleData(formattedResult);
            } catch (e: unknown) {
                console.error(`Couldn't get people: ${e}`);
            }
        };
        getPeople();
    }, []);

    useEffect(() => {
        // Convert people data to HTML elements
        const { judges, mentors } = peopleData;
        const tempPeople: JSX.Element[] = [];

        // Create elements for judges
        judges.forEach((prop, i) => {
            tempPeople.push(
                <Person key={`judge-${i}`} role="judge" {...prop} />
            );
        });

        // Create elements for mentors
        mentors.forEach((prop, i) => {
            tempPeople.push(
                <Person key={`mentor-${i}`} role="mentor" {...prop} />
            );
        });

        setpeopleElements(tempPeople);
    }, [peopleData]);

    return (
        <section className="people">
            <div className="extension top" />
            <div className="container">
                <h2>Who's involved?</h2>
                <Line lineColor="var(--high-beige)" />
                <div className="people-container">{peopleElements}</div>
            </div>
            <div className="extension bottom" />
        </section>
    );
}
