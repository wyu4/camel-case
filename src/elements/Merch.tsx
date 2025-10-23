import { JUKEBOX_URL } from "../global/APIHelpers";
import Line from "./Line";
import DesertCab from "/images/DesertCab.webp";
import MustacheCab from "/images/MustacheCab.webp";
import Myomnyom from "/images/Myomnyom.webp";
import TheVoracity from "/images/TheVoracity.webp";

export default function Merch() {
    const promoClick = () => {
        window.open(JUKEBOX_URL, "_blank")?.focus();
    };

    return (
        <section className="merch">
            <div className="info">
                <h2>FREE STICKERS</h2>
                <Line />
                <p>Get free stickers by attending!</p>
                <p className="jukebox">
                    <i>
                        Shoutout to{" "}
                        <button onClick={promoClick}>
                            <b>JUKEBOX</b>
                        </button>{" "}
                        for providing our custom stickers.
                    </i>
                </p>
            </div>
            <div className="media">
                <img
                    className="sticker"
                    src={DesertCab}
                    style={{
                        top: "5%",
                        left: "25%",
                        transform: "translateX(-25%) translateY(-5%)",
                    }}
                />
                <img
                    className="sticker"
                    src={MustacheCab}
                    style={{
                        top: "80%",
                        left: "40%",
                        transform: "translateX(-40%) translateY(-80%)",
                    }}
                />
                <img
                    className="sticker"
                    src={TheVoracity}
                    style={{
                        top: "70%",
                        left: "70%",
                        transform: "translateX(-70%) translateY(-70%)",
                    }}
                />
                <img
                    className="sticker"
                    src={Myomnyom}
                    style={{
                        top: "0%",
                        left: "50%",
                        transform: "translateX(-50%) translateY(0%)",
                    }}
                />
            </div>
        </section>
    );
}
