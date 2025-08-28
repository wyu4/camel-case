import { useRef } from "react";
import Plack from "./Plack";
import Line from "./Line";

export default function Mission() {
    const plack = useRef<HTMLDivElement>(null);

    return (
        <section className="mission">
            <Plack className="mission-container" ref={plack}>
                <h2>Our Mission</h2>
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
