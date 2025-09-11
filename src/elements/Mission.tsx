import Plack from "./Plack";
import Line from "./Line";

export default function Mission() {

    return (
        <section className="mission">
            <Plack className="container">
                <h2>Our Mission</h2>
                <Line />
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
