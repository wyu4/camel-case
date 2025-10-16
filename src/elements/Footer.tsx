import Contacts from "./Contacts";
import Alyn from "/images/AlynSignature.webp";
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
                <p>by</p>
            </div>
            <div className="signatures">
                <Signature name="alyn" src={Alyn} />
                <Signature name="elliott" src={Elliott} />
                <Signature name="erin" src={Erin} />
                <Signature name="fiona" src={Fiona} />
                <Signature name="jocelyn" src={Jocelyn} />
                <Signature name="umaiza" src={Umaiza} />
                <Signature name="wilson" src={Wilson} />
            </div>
            <div className="shortlinks contacts">
                <a href="mailto:camelcasehackathon@gmail.com">email</a>
                <a href="/sponsorship/" target="_blank">
                    sponsorship
                </a>
                <a href="/signup/" target="_blank">
                    sign up
                </a>
            </div>
        </section>
    );
}
