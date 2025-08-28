import { useRef } from "react";
import Line from "./Line";
import Plack from "./Plack";

export default function Intro() {
    const plack = useRef<HTMLDivElement>(null);

    return (
        <section className="intro">
            <Plack className="container" ref={plack}>
                <h2>What is this?</h2>
                <Line lineWidth="2px" lineMargin="1rem" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Plack>
        </section>
    );
}
