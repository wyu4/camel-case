import React, { useEffect, useRef, useState } from "react";
import Plack from "./Plack";
import Line from "./Line";

type QuestionProps = {
    question: string;
    children?: React.ReactNode;
};

function QuestionResponse({ question, children = [] }: QuestionProps) {
    const [opened, setOpened] = useState(false); // Tracks the open/close state
    const [responseHeight, setResponseHeight] = useState(0); // The height of the response element, useful for scaling
    const backgroundRef = useRef<HTMLDivElement>(null);
    const responseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (responseRef.current) {
            // Track the response element's height
            const sizeObserver = new ResizeObserver((entries) => {
                if (entries.length < 1 || !backgroundRef.current) return;
                const entry = entries[0];
                setResponseHeight(entry.borderBoxSize?.[0]?.blockSize);
                console.log(entry.borderBoxSize);
            });
            sizeObserver.observe(responseRef.current);

            setResponseHeight(
                responseRef.current.getBoundingClientRect().height
            );
            return () => {
                sizeObserver.disconnect();
            };
        }
    }, []);

    useEffect(() => {
        if (backgroundRef.current) {
            // Scale the background to include the response element if opened
            if (opened) {
                backgroundRef.current.style.bottom = `-${responseHeight}px`;
            } else {
                backgroundRef.current.style.bottom = "0";
            }
        }
    }, [opened, responseHeight]);

    // A lot of the animation is handled in the CSS file rather than a useEffect(), since it seemed a little more efficent here.
    return (
        <div className={`question${opened ? " opened" : ""}`}>
            <Plack className="background" ref={backgroundRef} />
            <div className="content">
                <button
                    onClick={() => {
                        setOpened((old) => !old);
                    }}
                    onBlur={() => {
                        setOpened(false);
                    }}
                >
                    <h3>{question}</h3>
                    <span className="material-icons">keyboard_arrow_down</span>
                </button>
                <div className="response" ref={responseRef}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    return (
        <section className="faq">
            <h2>FAQ</h2>
            <div className="container">
                <QuestionResponse
                    question="How much does it cost?"
                    children={
                        <p>
                            Everything is free! From food to merch to drinks,
                            it's all free!
                        </p>
                    }
                />
                <QuestionResponse
                    question="What should I bring?"
                    children={
                        <>
                            <ul>
                                <li>A laptop</li>
                                <li>A charger</li>
                                <li>A sleeping bag</li>
                                <li>Toiletries</li>
                            </ul>
                            <p>... and yourself.</p>
                        </>
                    }
                />
                <QuestionResponse
                    question="How big are the teams?"
                    children={
                        <p>
                            Each team will have up to 3 participants. Teams will
                            be formed at the event so don't worry if you don't
                            have a team!
                        </p>
                    }
                />
                <QuestionResponse
                    question="Is this safe?"
                    children={
                        <p>
                            Yes! This event will be fully supervised at all
                            times, if you have more concerns or questions check
                            out our safety guide (tbd) or feel free to reach out
                            to us!
                        </p>
                    }
                />
                <QuestionResponse
                    question="What if I don't know how to code?"
                    children={
                        <p>
                            This hackathon is completely beginner friendly,
                            we'll guide you through every step to make sure you
                            successfully complete your project!
                        </p>
                    }
                />
            </div>
            <div className="invisible" style={{ height: "5vh" }} />
            <QuestionResponse
                question="I still have more questions!"
                children={
                    <>
                        <p>
                            Feel free to reach out to any of our email / social
                            media accounts. We would love to get in touch with
                            you!
                        </p>
                        <Line />
                        <div>
                            <i>(tbd social media buttons here)</i>
                        </div>
                    </>
                }
            />
        </section>
    );
}
