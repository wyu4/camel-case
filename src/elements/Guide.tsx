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
import ActivityPhoto2 from "/images/photos/DSC_1065.webp";
import MakePhoto1 from "/images/photos/IMG_4345.webp";
import MakePhoto2 from "/images/photos/Batch2Photos-3233.webp";
import WinPhoto from "/images/photos/DSC_1346.webp";

export default function Guide() {
    return (
        <section className="guide">
            <Background />
            <div className="content">
                <div className="row signup">
                    <div className="relative">
                        <Leaf
                            version={1}
                            style={{
                                top: "0",
                                left: "0",
                                transform:
                                    "translateX(-40%) translateY(-60%) rotateZ(-30deg)",
                            }}
                        />
                        <Leaf
                            version={2}
                            style={{
                                bottom: "0",
                                left: "0",
                                transform:
                                    "translateX(-10%) translateY(60%) rotateZ(190deg)",
                            }}
                        />
                        <Leaf
                            version={3}
                            style={{
                                top: "0",
                                right: "0",
                                transform:
                                    "scaleX(-1) translateX(-50%) translateY(20%) rotateZ(-90deg)",
                            }}
                        />
                        <Plack style={{ transform: "rotateZ(5deg)" }}>
                            <h2>SIGN UP</h2>
                            <h3>and attend for free</h3>
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
                        <Leaf
                            version={1}
                            style={{
                                top: "0",
                                left: "0",
                                transform:
                                    "translateX(50%) translateY(-50%) rotateZ(10deg)",
                            }}
                        />
                        <Leaf
                            version={2}
                            style={{
                                bottom: "0",
                                right: "0",
                                transform:
                                    "scaleX(-1) scale(0.9) translateX(-10%) translateY(60%) rotateZ(180deg)",
                            }}
                        />
                        <Plack style={{ transform: "rotateZ(-5deg)" }}>
                            <h2>COLLABORATE</h2>
                            <h3>in teams of three</h3>
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
                <div className="row reverse">
                    <div className="bundle">
                        <img
                            className="rounded"
                            src={ActivityPhoto1}
                            style={{
                                transform: "rotateZ(-3deg)",
                            }}
                        />
                        <img
                            className="rounded"
                            src={ActivityPhoto2}
                            style={{
                                transform:
                                    "translateY(var(--spacing)) rotateZ(4deg) scale(0.9)",
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
                            <h3>something in 24 hours</h3>
                        </Plack>
                    </div>
                    <div className="bundle">
                        <img
                            className="rounded"
                            src={MakePhoto1}
                            style={{
                                transform: "rotateZ(-4deg) scale(1.2)",
                                margin: "0",
                            }}
                        />
                        <img
                            className="rounded"
                            src={MakePhoto2}
                            style={{
                                transform:
                                    "rotateZ(3deg) translateX(var(--spacing))",
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="relative">
                        <Plack style={{ transform: "rotateZ(-5deg)" }}>
                            <h2>DEMO</h2>
                            <h3>for a chance to win a prize</h3>
                        </Plack>
                    </div>
                    <img
                        className="rounded"
                        src={WinPhoto}
                        style={{
                            transform: "rotateZ(2.5deg) scale(1.25)",
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
