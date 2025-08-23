import React from "react";
import ErrorImageLight from "/images/ErrorIconLight.webp";
import ErrorImageDark from "/images/ErrorIconDark.webp";

type PlaceholderErrorPageProps = {
    className?: string;
};

export default function PlaceholderPage({
    className = "",
}: PlaceholderErrorPageProps) {
    const reloadButton = React.useRef<HTMLButtonElement>(null);
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const reload = () => {
            location.reload();
        };

        if (reloadButton.current) {
            reloadButton.current.addEventListener("click", reload);
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const checkTheme = () => setIsDark(mediaQuery.matches);
        checkTheme();
        mediaQuery.addEventListener("change", checkTheme);
    }, []);

    return (
        <div className={"placeholder-error-page " + className}>
            <span id="main-content">
                <img
                    src={isDark ? ErrorImageDark : ErrorImageLight}
                    draggable={false}
                    id="icon"
                ></img>
                <div id="main-message">
                    <h1>This site can't be reached</h1>
                    <p>
                        {"Check if there's a typo in " +
                            window.location.hostname +
                            "."}
                    </p>
                    <p>
                        If spelling is correct, <a>try bringing food.</a>
                    </p>
                </div>
                <p id="error-code">DNS_PROBE_HUNGRY_CAMEL</p>
                <button ref={reloadButton} id="reload-button">
                    Reload
                </button>
            </span>
        </div>
    );
};
