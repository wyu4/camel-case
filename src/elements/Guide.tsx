import {
    useEffect,
    useRef,
    useState,
    type ComponentPropsWithoutRef,
} from "react";
import Plack from "./Plack";
import { SIGNUP_DISABLED, SIGNUP_URL } from "../global/APIHelpers";
import Leaf1 from "/images/Leaf1.webp";
import Leaf2 from "/images/Leaf2.webp";
import Leaf3 from "/images/Leaf3.webp";
import TeamPhoto from "/images/photos/DSC_1005.webp";
import ActivityPhoto1 from "/images/photos/IMG_20250927_213244426.webp";
import WinPhoto from "/images/photos/DSC_1346.webp";

export default function Guide() {
    return (
        <section className="guide">
            <Background />
            <div className="content">
                <div className="row signup">
                    <div className="relative">
                        <Leaf version={1} style={{
                            top: "0",
                            left: "0",
                            transform: "translateX(-40%) translateY(-60%) rotateZ(-30deg)"
                        }} />
                        <Plack style={{ transform: "rotateZ(5deg)" }}>
                            <h2>SIGN UP</h2>
                            <h3>and attend for free!</h3>
                            <a
                                className={SIGNUP_DISABLED ? "disabled" : ""}
                                href={SIGNUP_DISABLED ? "" : SIGNUP_URL}
                                target="_blank"
                            >
                                Register Now
                            </a>
                        </Plack>
                    </div>
                </div>
                <div className="row">
                    <div className="relative">
                        <Plack style={{ transform: "rotateZ(-5deg)" }}>
                            <h2>COLLABORATE</h2>
                            <h3>in teams of three!</h3>
                        </Plack>
                    </div>
                    <img
                        className="rounded"
                        src={TeamPhoto}
                        style={{
                            transform: "rotateZ(4deg)",
                        }}
                    />
                </div>
                <div className="row">
                    <div>
                        <img
                            className="rounded"
                            src={ActivityPhoto1}
                            style={{
                                transform:
                                    " translateX(10%) translateY(-10%) rotateZ(-3deg)",
                            }}
                        />
                        <img
                            className="rounded"
                            src={ActivityPhoto1}
                            style={{
                                transform: "rotateZ(2.5deg)",
                            }}
                        />
                    </div>
                    <div className="relative">
                        <Plack style={{ transform: "rotateZ(2deg)" }}>
                            <h2>ATTEND</h2>
                            <h3>workshops and activities</h3>
                        </Plack>
                    </div>
                </div>
                <div className="row">
                    <div className="relative">
                        <Plack style={{ transform: "rotateZ(2deg)" }}>
                            <h2>CODE</h2>
                            <h3>something in 24 hours!</h3>
                        </Plack>
                    </div>
                </div>
                <div className="row">
                    <div className="relative">
                        <Plack style={{ transform: "rotateZ(-5deg)" }}>
                            <h2>PRESENT</h2>
                            <h3>for a chance to win a prize!</h3>
                        </Plack>
                    </div>
                    <img
                        className="rounded"
                        src={WinPhoto}
                        style={{
                            transform: "rotateZ(2.5deg)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

function Leaf({
    version = 1,
    ...props
}: { version?: 1 | 2 | 3 } & ComponentPropsWithoutRef<"img">) {
    return (
        <img
            className="leaf"
            src={(() => {
                switch (version) {
                    case 1:
                        return Leaf1;
                    case 2:
                        return Leaf2;
                    case 3:
                        return Leaf3;
                }
            })()}
            {...props}
        />
    );
}

function Background() {
    const parallax1 = 0;
    const parallax2 = 1 / 8;
    const parallax3 = 1 / 7;
    const parallax4 = 1 / 6;

    const backgroundRef = useRef<HTMLDivElement>(null);
    const [sectionY, setSectionY] = useState(0);

    useEffect(() => {
        if (backgroundRef.current) {
            setSectionY(
                window.screenY +
                    window.innerHeight / 2 -
                    backgroundRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, window.innerHeight, backgroundRef]);

    return (
        <div className="background" ref={backgroundRef}>
            <div
                className="layer l1"
                style={{
                    transform: `translateY(${sectionY * parallax1}px)`,
                }}
            >
                <div className="middle" />
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l2"
                style={{
                    transform: `translateY(${sectionY * parallax2}px)`,
                }}
            >
                <div className="middle">
                    <div
                        className="prop"
                        style={{
                            top: "10%",
                            transform: "rotateZ(10deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "30%",
                            transform: "rotateZ(2deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "70%",
                            transform: "rotateZ(-5deg)",
                        }}
                    />
                </div>
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l3"
                style={{
                    transform: `translateY(${sectionY * parallax3}px)`,
                }}
            >
                <div className="middle">
                    <div
                        className="prop"
                        style={{
                            top: "20%",
                            transform: "rotateZ(5deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "50%",
                            transform: "rotateZ(-3deg)",
                        }}
                    />
                </div>
                <div className="left" />
                <div className="right" />
            </div>
            <div
                className="layer l4"
                style={{
                    transform: `translateY(${sectionY * parallax4}px)`,
                }}
            >
                <div className="middle">
                    <div
                        className="prop"
                        style={{
                            top: "40%",
                            transform: "rotateZ(-6deg)",
                        }}
                    />
                    <div
                        className="prop"
                        style={{
                            top: "80%",
                            transform: "rotateZ(5deg)",
                        }}
                    />
                </div>
                <div className="left" />
                <div className="right" />
            </div>
        </div>
    );
}
