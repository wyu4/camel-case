import Line from "./Line";
import Plack from "./Plack";

export default function Sponsors() {
    return (
        <section className="sponsors">
            <div className="info">
                <Plack className="about">
                    <h2>Sponsors</h2>
                    <Line />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. For more information, see our{" "}
                        <u>
                            <a>sponsorship package</a>
                        </u>
                        .
                    </p>
                </Plack>

                <Plack className="contact">
                    <h2>Contact us!</h2>
                    <Line />
                </Plack>
            </div>

            <Plack className="tiers"></Plack>
        </section>
    );
}
