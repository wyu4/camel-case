import { type JSX } from "react";
import PalmTree from "/images/PalmTree.svg";
import DesertGrass from "/images/DesertGrass.svg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SIGNUP_DISABLED, SIGNUP_URL } from "../global/APIHelpers";
import Cababas from "/images/Cababas.webp";

gsap.registerPlugin(ScrollToPlugin);

export default function TitleBanner({ ...props }: VerticalWindowProps) {
    const TITLE = "camelCase"; // Set this to whatever the name is
    const headers: JSX.Element[] = [];

    const buttonVisibilityRange = 0.1;

    const scroll = () => {
        gsap.to(window, {
            duration: 2,
            scrollTo: "#intro",
            ease: "Power1.easeInOut",
        });
    };

    const signup = () => {
        if (!SIGNUP_DISABLED) {
            window.open(SIGNUP_URL, "_blank")?.focus();
        }
    };

    const sponsor = () => {
        gsap.to(window, {
            duration: 5,
            scrollTo: "#sponsors",
            ease: "Power1.easeInOut",
        });
    };

    // Splits the title into seperate header elements
    TITLE.split("").forEach((character, i) => {
        headers.push(
            <h1
                key={`${character}-${i}`}
                className={character.toUpperCase() === character ? "uppercase" : ""}
            >
                {character}
            </h1>
        );
    });

    return (
        <section className="title-banner">
            <img
                className={
                    "cababas " +
                    (props.scrollPosition <
                    props.viewHeight * buttonVisibilityRange
                        ? "visible"
                        : "")
                }
                src={Cababas}
            />
            <div className="view">
                <div
                    className="title"
                    style={{
                        transform: `translateY(${props.scrollPosition / 5}px)`,
                    }}
                >
                    {headers}
                </div>
                <div
                    className={
                        "buttons " +
                        (props.scrollPosition <
                        props.viewHeight * buttonVisibilityRange
                            ? "visible"
                            : "")
                    }
                >
                    <button
                        className={
                            "signup " + (SIGNUP_DISABLED ? "disabled" : "")
                        }
                        onClick={signup}
                    >
                        Sign Up
                    </button>
                    <button className="sponsor " onClick={sponsor}>
                        Sponsor Us
                    </button>
                </div>
                <button
                    className={
                        "scroll-button " +
                        (props.scrollPosition <
                        props.viewHeight * buttonVisibilityRange
                            ? "visible"
                            : "")
                    }
                    onClick={scroll}
                >
                    <span className="material-icons">arrow_downward</span>
                </button>
                <Decor {...props} />
            </div>
            <div className="extension bottom" />
        </section>
    );
}

function Decor({ ...props }: VerticalWindowProps) {
    return (
        <>
            <div className="dunes">
                <div
                    className="layer-1"
                    style={{
                        transform: `translateY(${props.scrollPosition / 25}px)`,
                    }}
                >
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
                    <img
                        className="tree reverse"
                        src={PalmTree}
                        style={{
                            bottom: "0",
                            left: "33%",
                            width: "18%",
                        }}
                    />
                    <img
                        className="grass"
                        src={DesertGrass}
                        style={{
                            bottom: "7%",
                            left: "41%",
                            width: "5%",
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
                    <img
                        className="grass reverse"
                        src={DesertGrass}
                        style={{
                            bottom: "4.5%",
                            right: "40%",
                            width: "5%",
                        }}
                    />
                    <img
                        className="tree reverse"
                        src={PalmTree}
                        style={{
                            bottom: "-2%",
                            right: "45%",
                            width: "15%",
                        }}
                    />

                    <img
                        className="tree"
                        src={PalmTree}
                        style={{
                            bottom: "0",
                            left: "50%",
                            width: "15%",
                        }}
                    />
                    <img
                        className="grass"
                        src={DesertGrass}
                        style={{
                            bottom: "4.5%",
                            right: "43%",
                            width: "5%",
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
            <span className="sign padded">
                <h2>
                    <span className="material-icons">arrow_back</span>
                    OASIS
                </h2>
            </span>
        </>
    );
}
