import type { JSX } from "react";

export default function TitleBanner() {
    const TITLE = "CAMELCASE"; // Set this to whatever the name is
    const headers: JSX.Element[] = [];

    // Splits the title into seperate header elements
    TITLE.split("").forEach((character) => {
        headers.push(<h1>{character}</h1>);
    });

    return (
        <section className="title-banner">
            <div id="title">{headers}</div>
        </section>
    );
}
