import { useEffect, useState } from "react";
import Plack from "./Plack";

const IMAGE_API = "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/media/"

function Person( role: "judge" | "mentor", {icon="media/incognito.png", label="No label", name, socials} : PersonProps ) {
    const [formattedIconLink, setFormattedIconLink] = useState("");
    
    useEffect(() => {
        setFormattedIconLink(icon.startsWith("media/") ? IMAGE_API + icon.replace("media/", "") : icon);
    }, [icon]);



    return <div className={"person " + role}>
        <h3>{name}</h3>
        <img src={formattedIconLink} />
        <p>{label}</p>
    </div>;
}

export default function Judges(  {people}: {{judges, mentors} : GroupProps} ) {


    return (
        <section className="judges">
            <Plack>
                <h2>Who's involved?</h2>
                <div></div>
            </Plack>
        </section>
    );
}
