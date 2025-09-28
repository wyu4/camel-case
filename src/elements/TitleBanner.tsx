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
            <div
                id="title"
                style={{
                    transform: `translateY(${props.scrollPosition / 5}px)`,
                }}
            >
                {headers}
            </div>
            <div className="dunes">
                <div className="layer-1" style={{
                        transform: `translateY(${props.scrollPosition / 25}px)`,
                    }}>
                    <div
                        className="dune"
                        style={{
                            right: "-30%",
                            width: "90%",
                        }}
                    />
                    <div
                        className="dune"
                        style={{
                            left: "-20%",
                            width: "90%",
                            bottom: "-2%",
                        }}
                    />
                </div>
                <div
                    className="layer-2"
                    style={{
                        transform: `translateY(${props.scrollPosition / 20}px)`,
                    }}
                >
                    <div
                        className="dune"
                        style={{
                            left: "-30%",
                            width: "90%",
                        }}
                    />
                </div>
                <div
                    className="layer-3"
                    style={{
                        transform: `translateY(${props.scrollPosition / 10}px)`,
                    }}
                >
                    <div
                        className="dune"
                        style={{
                            left: "0%",
                            width: "90%",
                        }}
                    />
                </div>
                <div
                    className="layer-4"
                    style={{
                        transform: `translateY(${props.scrollPosition / 7}px)`,
                    }}
                >
                    <div
                        className="dune"
                        style={{
                            right: "-40%",
                            bottom: "-5%",
                            width: "100%",
                        }}
                    />
                </div>
            </div>
            <div
                className="sun"
                style={{
                    transform: `translateY(${props.scrollPosition * 0.75}px)`,
                }}
            />
        </section>
    );
}
