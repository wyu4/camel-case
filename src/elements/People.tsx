import { useEffect, useState, type JSX } from "react";
import Plack from "./Plack";
import Line from "./Line";

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
            <img className="rounded" src={icon.startsWith("media/") ? IMAGE_API + icon : icon} draggable={false} />
            <p>{`(${role})`}</p>
        </div>
    );
}

export default function People({ judges, mentors }: GroupProps) {
    const [people, setPeople] = useState<(JSX.Element | null)[]>([]);

    useEffect(() => {
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

        setPeople(tempPeople);
    }, [judges, mentors]);

    return (
        <section className="people">
            <Plack>
                <h2>Who's involved?</h2>
                <Line lineWidth="2px" lineMargin="1rem"  />
                <div className="container">{people}</div>
            </Plack>
        </section>
    );
}
