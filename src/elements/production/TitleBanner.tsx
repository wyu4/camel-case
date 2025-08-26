import type { JSX } from "react";

export default function TitleBanner() {
    const TITLE = "CAMELCASE";
    const headers: JSX.Element[] = [];

    TITLE.split("").forEach((character) => {
        headers.push(<h1>{character}</h1>);
    });

    return (
        <section className="title-banner">
            <div id="title">{headers}</div>
        </section>
    );
}
