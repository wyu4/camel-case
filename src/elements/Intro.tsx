import Line from "./Line";
import Plack from "./Plack";

export default function Intro() {
    return (
        <section className="intro">
            <Plack className="container">
                <h2>What is this?</h2>
                <Line />
                <p>
                    camelCase is a student-run overnight hackathon. This coming Winter, join 100 other teenagers in a collabrorative coding event, and make something awesome!
                </p>
            </Plack>
        </section>
    );
}
