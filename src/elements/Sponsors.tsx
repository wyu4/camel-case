import Plack from "./Plack";

export default function Sponsors() {
    return (
        <section className="sponsors">
            <Plack>
                <h2>Sponsor Us!</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button>See Sponsorship Package</button>
            </Plack>

            <Plack>
                <h3>Gigabyte</h3>
                <h3>Megabyte</h3>
                <h3>Kilobyte</h3>
                <h3>Byte</h3>
            </Plack>
        </section>
    );
}
