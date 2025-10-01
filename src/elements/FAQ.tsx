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
                    <p>{children}</p>
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
                    question="How much does this cost?"
                    children={
                        <p>
                            It's free! Sign ups are entirely cost-free, and food
                            / beverages are included!
                        </p>
                    }
                />
                <QuestionResponse
                    question="What's our mission?"
                    children={<p>Mission</p>}
                />
                <QuestionResponse
                    question="How much are the teams?"
                    children={
                        <>
                            <p>
                                Teams can have up to three participants.
                            </p>
                        </>
                    }
                />
                <QuestionResponse
                    question="I don't know anyone..."
                    children={
                        <p>
                            We HIGHLY recommend teaming up someone. We can help
                            you find a teammate if you don't know anyone at the
                            event!
                        </p>
                    }
                />
                <QuestionResponse
                    question="How do we decide winners?"
                    children={<p>Bla bla bla</p>}
                />
                <QuestionResponse
                    question="What should I bring?"
                    children={
                        <>
                            <ul>
                                <li>Sleeping bags / pillows</li>
                                <li>Cellphone</li>
                                <li>
                                    Something to code with (preferrably a
                                    laptop)
                                </li>
                                <li>Extra change of clothes</li>
                            </ul>
                            <p>
                                ... and anything else you need to pass the
                                night.
                            </p>
                        </>
                    }
                />
                <QuestionResponse
                    question="Is this safe?"
                    children={
                        <p>
                            All participants will be supervised 24/7, and will
                            not be allowed to leave without special permission.
                            Bla bla bla.
                        </p>
                    }
                />
                <QuestionResponse
                    question="Can I join as a beginner?"
                    children={
                        <p>
                            Yes! This event is for highschoolers with any level
                            of experience. There will be mentors circulating, as
                            well as optional workshops scheduled throughout the
                            event.
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
