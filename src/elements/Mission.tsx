import Plack from "./Plack";
import Line from "./Line";

export default function Mission() {
    return (
        <section className="mission">
            <Plack className="container">
                <h2>Our Mission</h2>
                <Line />
                <p>
                    We are dedicated to create a beginner friendly, inclusive
                    environment that gives students all the tools they need to
                    create a successful project.
                </p>
            </Plack>
        </section>
    );
}
