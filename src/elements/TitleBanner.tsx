import type { JSX } from "react";

export default function TitleBanner({ ...props }: VerticalWindowProps) {
    const TITLE = "CAMELCASE"; // Set this to whatever the name is
    const headers: JSX.Element[] = [];

    // Splits the title into seperate header elements
    TITLE.split("").forEach((character, i) => {
        headers.push(<h1 key={`${character}-${i}`}>{character}</h1>);
    });

    return (
        <section
            className="title-banner"
            style={{ transform: `translateY(calc(-1.5em - ${props.scrollPosition/2}px))` }}
        >
            <div id="title">{headers}</div>
        </section>
    );
}
