import { FilloutFullScreenEmbed } from "@fillout/react";

const ACTUAL_URL = "https://forms.hackclub.com/camelcase-signup";
const DOMAIN = "forms.hackclub.com";
const ID = "gnnwzL9j9yus";

const USE_EMBED = true;

if (!USE_EMBED) {
    const redirectMeta = document.createElement("meta");
    redirectMeta.httpEquiv = "refresh";
    redirectMeta.content = `0; url=${ACTUAL_URL}`;
    document.head.appendChild(redirectMeta);
}

export default function App() {
    const redirect = () => {
        window.location.href = ACTUAL_URL;
    };

    return USE_EMBED ? (
        <FilloutFullScreenEmbed filloutId={ID} domain={DOMAIN} />
    ) : (
        <div className="container">
            <h1>Redirecting to sign-up form...</h1>
            <button onClick={redirect}>...or click here</button>
        </div>
    );
}
