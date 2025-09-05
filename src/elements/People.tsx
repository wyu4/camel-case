import { useEffect, useState, type JSX } from "react";
import Plack from "./Plack";

const IMAGE_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/";

type Role = "judge" | "mentor";

type PersonPropsWithRole = PersonProps & {
    role: Role;
};

function Person({
    icon = "media/incognito.png",
    label = "No label",
    name,
    socials,
    role,
}: PersonPropsWithRole) {
    return (
        <div className={"person " + role}>
            <h3>{name}</h3>
            <img src={icon.startsWith("media/") ? IMAGE_API + icon : icon} />
            <p>{label}</p>
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
                <div>{people}</div>
            </Plack>
        </section>
    );
}
