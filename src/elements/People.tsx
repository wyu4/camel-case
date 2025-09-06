import { useEffect, useState, type JSX } from "react";
import Plack from "./Plack";
import Line from "./Line";

const PEOPLE_API =
    "https://raw.githubusercontent.com/wyu4/storage/refs/heads/main/people.json";
const IMAGE_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/";

type Role = "judge" | "mentor";

type PersonPropsWithRole = PersonProps & {
    role: Role;
};

function Person({
    icon = "media/Incognito.svg",
    name,
    role,
}: PersonPropsWithRole) {
    return (
        <div className={"person rounded " + role}>
            <h3>{name}</h3>
            <img
                className="rounded"
                src={icon.startsWith("media/") ? IMAGE_API + icon : icon}
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
        const { judges, mentors } = peopleData;
        const tempPeople: JSX.Element[] = [];

        judges.forEach((prop, i) => {
            tempPeople.push(
                <Person key={`judge-${i}`} role="judge" {...prop} />
            );
        });

        mentors.forEach((prop, i) => {
            tempPeople.push(
                <Person key={`mentor-${i}`} role="mentor" {...prop} />
            );
        });

        setpeopleElements(tempPeople);
    }, [peopleData]);

    return (
        <section className="people">
            <Plack>
                <h2>Who's involved?</h2>
                <Line lineWidth="2px" lineMargin="1rem" />
                <div className="container">{peopleElements}</div>
            </Plack>
        </section>
    );
}
