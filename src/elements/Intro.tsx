import { useEffect, useRef, useState } from "react";
import Line from "./Line";
import Plack from "./Plack";
import Photo1 from "/images/photos/Batch1Photos-3134.webp";
import Photo2 from "/images/photos/DSC_1185.webp";

export default function Intro() {
    return (
        <section className="intro">
            <div className="extension top" />
            <Ceiling />
            <div className="info">
                <Plack>
                    <h2>What is this?</h2>
                    <Line />
                    <p>
                        Join us on December 20th-21th to attend camelCase, an
                        overnight hackathon with 100 other teenagers! You'll
                        have 24 hours to make something new and original from
                        scratch! Sound fun? Find out more below!
                    </p>
                </Plack>
            </div>
            <Ground />
        </section>
    );
}

function Ceiling() {
    const ceilingRef = useRef<HTMLDivElement>(null);
    const [ceilingY, setCeilingY] = useState(0);

    useEffect(() => {
        if (ceilingRef.current) {
            setCeilingY(
                window.screenY - ceilingRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, ceilingRef]);

    return (
        <div id="intro" className="ceiling" ref={ceilingRef}>
            <div className="layer l1" />
            <div
                className="layer l2"
                style={{
                    transform: `translateY(calc(${ceilingY * 0.05}px + 5%))`,
                }}
            />
            <div
                className="layer l3"
                style={{
                    transform: `translateY(calc(${ceilingY * 0.075}px + 10%))`,
                }}
            />
            <div
                className="layer l4"
                style={{
                    transform: `translateY(calc(${ceilingY * 0.1}px + 15%))`,
                }}
            />
        </div>
    );
}

function Ground() {
    const groundRef = useRef<HTMLDivElement>(null);
    const [groundY, setGroundY] = useState(0);

    useEffect(() => {
        if (groundRef.current) {
            setGroundY(
                window.screenY +
                    window.innerHeight / 2 -
                    groundRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, window.innerHeight, groundRef]);

    return (
        <div className="ground" ref={groundRef}>
            <div className="layer l1">
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l2"
                style={{
                    transform: `translateY(${groundY * 0.02}px)`,
                }}
            >
                <img
                    className="rounded"
                    src={Photo2}
                    style={{
                        right: "5%",
                        bottom: "90%",
                        transform: "rotateZ(2deg) scale(1.25)",
                    }}
                />
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l3"
                style={{
                    transform: `translateY(${groundY * 0.04}px)`,
                }}
            >
                <img
                    className="rounded"
                    src={Photo1}
                    style={{
                        left: "5%",
                        bottom: "90%",
                        transform: "rotateZ(-5deg)"
                    }}
                />
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l4"
                style={{
                    transform: `translateY(${groundY * 0.06}px)`,
                }}
            >
                <div className="left" />
                <div className="right" />
            </div>
        </div>
    );
}
