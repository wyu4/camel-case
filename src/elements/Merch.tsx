import { JUKEBOX_URL } from "../global/APIHelpers";
import Line from "./Line";

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
                
            </div>
        </section>
    );
}
