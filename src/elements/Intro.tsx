import { useEffect, useRef, useState } from "react";
import Line from "./Line";
import Plack from "./Plack";

export default function Intro({ viewHeight }: VerticalWindowProps) {
    const ceilingRef = useRef<HTMLDivElement>(null);
    const [ceilingY, setCeilingY] = useState(0);

    useEffect(() => {
        if (ceilingRef.current) {
            setCeilingY(
                window.screenY - ceilingRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY]);

    return (
        <section className="intro">
            <div className="extension top" />
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
            <div className="info">
                <Plack>
                    <h2>What is this?</h2>
                    <Line />
                    <p>
                        Join us on November 29th-30th to attend camelCase, an
                        overnight hackathon with 100 other teenagers! You'll
                        have 24 hours to make something new and original from
                        scratch! Sound fun? Find out more below!
                    </p>
                </Plack>
            </div>
        </section>
    );
}
