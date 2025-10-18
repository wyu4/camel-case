import { useEffect, useRef, useState } from "react";

export default function Guide() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [sectionY, setSectionY] = useState(0);

    useEffect(() => {
        if (sectionRef.current) {
            setSectionY(
                window.screenY +
                    window.innerHeight / 2 -
                    sectionRef.current.getBoundingClientRect().top
            );
        }
    }, [window.scrollY, window.innerHeight, sectionRef]);

    return (
        <section className="guide" ref={sectionRef}>
            <div className="background">
                <div className="left">
                    <div className="layer l1" />
                <div
                    className="layer l2"
                    style={{
                        transform: `translateY(${sectionY * 0.05}px)`,
                    }}
                />
                <div
                    className="layer l3"
                    style={{
                        transform: `translateY(${sectionY * 0.1}px)`,
                    }}
                />
                <div
                    className="layer l4"
                    style={{
                        transform: `translateY(${sectionY * 0.15}px)`,
                    }}
                />
                </div>
                <div className="right">
                    <div className="layer l1" />
                    <div className="layer l2" />
                    <div className="layer l3" />
                    <div className="layer l4" />
                </div>
            </div>
            <div className="content">
                <div style={{ transform: "rotateZ(5deg)" }}>
                    <h2>SIGN UP</h2>
                    <h3> for free!</h3>
                </div>
                <div style={{ transform: "rotateZ(-5deg)" }}>
                    <h2>TEAM UP</h2>
                    <h3> with other teens!</h3>
                </div>
                <div style={{ transform: "rotateZ(2deg)" }}>
                    <h2>BUILD</h2>
                    <h3> something cool!</h3>
                </div>
            </div>
        </section>
    );
}
