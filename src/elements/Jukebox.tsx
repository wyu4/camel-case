import { JUKEBOX_URL } from "../global/APIHelpers";

export default function Jukebox() {
    const promoClick = () => {
        window.open(JUKEBOX_URL, "_blank")?.focus();
    };

    return (
        <section className="jukebox">
            <div className="info">
                <h2>FREE STICKERS</h2>
                <p>Get free stickers by attending!</p>
                <p>
                    Shoutout to{" "}
                    <button className="promo" onClick={promoClick}>
                        <h2>JUKEBOX</h2>
                    </button>{" "}
                    for providing our custom stickers.
                </p>
            </div>
            <div className="media"></div>
        </section>
    );
}
