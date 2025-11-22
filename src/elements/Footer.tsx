import gsap from "gsap";
import {
    EMAIL_URL,
    GITHUB_URL,
    INSTAGRAM_URL,
    SIGNUP_DISABLED,
    SIGNUP_URL,
    SPONSORSHIP_URL,
} from "../global/APIHelpers";
import Alyn from "/images/AlynSignature.webp";
import Advita from "/images/AdvitaSignature.webp";
import Claire from "/images/ClaireSignature.webp";
import Elliott from "/images/ElliottSignature.webp";
import Erin from "/images/ErinSignature.webp";
import Fiona from "/images/FionaSignature.webp";
import Jocelyn from "/images/JocelynSignature.webp";
import Umaiza from "/images/UmaizaSignature.webp";
import Wilson from "/images/WilsonSignature.webp";

function Signature({ name, src }: { name: string; src: string }) {
    return (
        <div
            className={"signature " + name}
            style={{
                maskImage: `url(${src})`,
            }}
        />
    );
}

export default function Footer() {
    return (
        <section className="footer">
            <div className="header">
                <p>Made with</p>
                <div className="heart" />
                <p>by highschoolers</p>
            </div>
            <div className="signatures">
                <Signature name="alyn" src={Alyn} />
                <Signature name="advita" src={Advita} />
                <Signature name="claire" src={Claire} />
                <Signature name="elliott" src={Elliott} />
                <Signature name="erin" src={Erin} />
                {/* <Signature name="fiona" src={Fiona} /> */}
                <Signature name="jocelyn" src={Jocelyn} />
                <Signature name="umaiza" src={Umaiza} />
                <Signature name="wilson" src={Wilson} />
            </div>
            <div className="shortlinks contacts">
                <a
                    className={SIGNUP_DISABLED ? "disabled" : ""}
                    href={SIGNUP_URL}
                    target="_blank"
                >
                    sign up
                </a>
                <a href={EMAIL_URL}>email</a>
                <a href={SPONSORSHIP_URL} target="_blank">
                    sponsorship
                </a>

                <a href={INSTAGRAM_URL} target="_blank">
                    instagram
                </a>
                <a href={GITHUB_URL} target="_blank">
                    view code
                </a>
            </div>
        </section>
    );
}
