import { useEffect, useRef, useState } from "react";
import Plack from "./Plack";
import { getImagePath } from "../global/APIHelpers";
import Line from "./Line";

export default function Guide() {
    return (
        <section className="guide">
            <Background />
            <div className="content">
                <div className="row">
                    <Plack style={{ transform: "rotateZ(5deg)" }}>
                        <div className="header">
                            <h2>SIGN UP</h2>
                            <h3> for free!</h3>
                        </div>
                        <Line lineColor="var(--high-brown)" />
                        <button>Sign up form!</button>
                    </Plack>
                </div>
                <div className="row">
                    <Plack style={{ transform: "rotateZ(-5deg)" }}>
                        <h2>TEAM UP</h2>
                        <h3> with other teens!</h3>
                    </Plack>
                </div>

                <div className="row">
                    <Plack style={{ transform: "rotateZ(2deg)" }}>
                        <h2>BUILD</h2>
                        <h3> something cool!</h3>
                    </Plack>
                </div>
            </div>
        </section>
    );
}

function Background() {
    const parallax1 = 0;
    const parallax2 = 1 / 8;
    const parallax3 = 1 / 7;
    const parallax4 = 1 / 6;

    const backgroundRef = useRef<HTMLDivElement>(null);
    const [sectionY, setSectionY] = useState(0);

    useEffect(() => {
        if (backgroundRef.current) {
            setSectionY(
                window.screenY +
                    window.innerHeight / 2 -
                    backgroundRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, window.innerHeight, backgroundRef]);

    return (
        <div className="background" ref={backgroundRef}>
            <div
                className="layer l1"
                style={{
                    transform: `translateY(${sectionY * parallax1}px)`,
                }}
            >
                <div className="middle" />
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l2"
                style={{
                    transform: `translateY(${sectionY * parallax2}px)`,
                }}
            >
                <div className="middle">
                    <div
                        className="prop"
                        style={{
                            top: "10%",
                            transform: "rotateZ(10deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "70%",
                            transform: "rotateZ(-5deg)",
                        }}
                    />
                </div>
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l3"
                style={{
                    transform: `translateY(${sectionY * parallax3}px)`,
                }}
            >
                <div className="middle">
                    <div
                        className="prop"
                        style={{
                            top: "20%",
                            transform: "rotateZ(5deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "50%",
                            transform: "rotateZ(-3deg)",
                        }}
                    />
                </div>
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l4"
                style={{
                    transform: `translateY(${sectionY * parallax4}px)`,
                }}
            >
                <div className="middle">
                    <div
                        className="prop"
                        style={{
                            top: "40%",
                            transform: "rotateZ(-6deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "80%",
                            transform: "rotateZ(5deg)",
                        }}
                    />
                </div>
                <div className="left" />
                <div className="right" />
            </div>
        </div>
    );
}
