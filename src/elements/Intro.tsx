import Line from "./Line";
import Plack from "./Plack";

export default function Intro() {
    return (
        <section className="intro">
            <Plack className="container">
                <h2>What is this?</h2>
                <Line />
                <p>
                    Join us on November 29th-30th to attend camelCase, an
                    overnight hackathon with 100 other teenagers! You'll have 24
                    hours to make something new and original from scratch! Sound
                    fun? Find out more below!
                </p>
            </Plack>
            <div className="extension" />
        </section>
    );
}
