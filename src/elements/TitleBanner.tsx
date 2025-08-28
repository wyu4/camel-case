import type { JSX } from "react";

export default function TitleBanner() {
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
