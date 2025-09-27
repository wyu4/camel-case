import type { JSX } from "react";
import CababasImage from "/images/Cababas.webp";
import SnowberryImage from "/images/Snowberry.webp";

export default function TitleBanner({ ...props }: VerticalWindowProps) {
    const TITLE = "CAMELCASE"; // Set this to whatever the name is
    const headers: JSX.Element[] = [];

    // Splits the title into seperate header elements
    TITLE.split("").forEach((character, i) => {
        headers.push(<h1 key={`${character}-${i}`}>{character}</h1>);
    });

    return (
        <section className="title-banner">
            <div id="title">{headers}</div>
        </section>
    );
}
