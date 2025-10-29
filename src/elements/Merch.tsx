import { JUKEBOX_URL } from "../global/APIHelpers";
import Line from "./Line";
import DesertCab from "/images/DesertCab.webp";
import MoustacheCab from "/images/MoustacheCab.webp";
import Myomnyom from "/images/Myomnyom.webp";
import TheVoracity from "/images/TheVoracity.webp";

export default function Merch() {
    const promoClick = () => {
        window.open(JUKEBOX_URL, "_blank")?.focus();
    };

    return (
        <section className="merch">
            <div className="background">
                <div className="grid" />
                <img
                    className="sticker"
                    src={TheVoracity}
                    style={{
                        top: "-10%",
                        left: "-5%",
                        transform:
                            "rotateZ(20deg)",
                    }}
                />
                <img
                    className="sticker"
                    src={DesertCab}
                    style={{
                        top: "25%",
                        right: "-10%",
                        transform:
                            "rotateZ(-20deg)",
                    }}
                />
                <img
                    className="sticker"
                    src={Myomnyom}
                    style={{
                        bottom: "0%",
                        left: "0%",
                        transform:
                            "rotateZ(-20deg)",
                    }}
                />
            </div>
            <div className="content">
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
                            top: "0%",
                            left: "0%",
                            transform:
                                "rotateZ(10deg)",
                        }}
                    />
                    <img
                        className="sticker"
                        src={TheVoracity}
                        style={{
                            bottom: "5%",
                            right: "10%",
                            transform:
                                "rotateZ(-5deg)",
                        }}
                    />
                    <img
                        className="sticker"
                        src={MoustacheCab}
                        style={{
                            bottom: "0%",
                            right: "40%",
                            transform:
                                "rotateZ(5deg)",
                        }}
                    />
                    <img
                        className="sticker"
                        src={Myomnyom}
                        style={{
                            top: "0%",
                            left: "30%",
                            transform:
                                "rotateZ(-10deg)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
