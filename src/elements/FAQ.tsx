import { useEffect, useRef, useState } from "react";
import Plack from "./Plack";

type QuestionProps = {
    question: string;
    answer: string;
};

function QuestionResponse({ question, answer }: QuestionProps) {
    const [opened, setOpened] = useState(false);
    const [responseHeight, setResponseHeight] = useState(0);
    const backgroundRef = useRef<HTMLDivElement>(null);
    const responseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (responseRef.current) {
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
            if (opened) {
                backgroundRef.current.style.bottom = `-${responseHeight}px`;
            } else {
                backgroundRef.current.style.bottom = "0";
            }
        }
    }, [opened, responseHeight]);

    return (
        <div className={`question${opened ? " opened" : ""}`}>
            <Plack className="background" ref={backgroundRef} />
            <div className="content">
                <button
                    onClick={() => {
                        setOpened((old) => !old);
                    }}
                >
                    <h3>{question}</h3>
                    <span className="material-icons">keyboard_arrow_down</span>
                </button>
                <div className="response" ref={responseRef}>
                    <p>{answer}</p>
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
                    question="Why did the chicken cross the road?"
                    answer="To get to the other side!"
                />
                <QuestionResponse
                    question="How much does this cost?"
                    answer="This costs roughly $1000000 to attend."
                />
                <QuestionResponse
                    question="What should I make?"
                    answer="Anything sweet. Baked goods are recommended."
                />
            </div>
        </section>
    );
}
