import React, {
    useEffect,
    useRef,
    useState,
    type ComponentPropsWithRef,
    type MouseEventHandler,
    type ReactNode,
} from "react";
import Plack from "./Plack";
import Line from "./Line";
import Contacts from "./Contacts";

type QuestionProps = {
    question: string;
    children?: ReactNode;
    opened?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & ComponentPropsWithRef<"div">;

function QuestionResponse({
    question,
    children = [],
    opened = false,
    ...props
}: QuestionProps) {
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
        <div className={`question${opened ? " opened" : ""}`} ref={props.ref}>
            <Plack className="background" ref={backgroundRef} />
            <div className="content">
                <button onClick={props.onClick}>
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
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);

    const createQuestion = (
        question: string,
        answer: ReactNode,
        index: number
    ) => {
        const onClick = () => {
            setOpenedIndex(openedIndex === index ? null : index);
        };

        return (
            <QuestionResponse
                key={question}
                question={question}
                children={answer}
                opened={openedIndex === index}
                onClick={onClick}
            />
        );
    };

    return (
        <section className="faq" id="faq">
            <h2>FAQ</h2>
            <div className="container">
                {[
                    {
                        question: "How much does it cost?",
                        answer: (
                            <p>
                                Everything is free! From food to merch to
                                drinks, it's all free!
                            </p>
                        ),
                    },
                    {
                        question: "What should I bring?",
                        answer: (
                            <>
                                <ul>
                                    <li>A laptop</li>
                                    <li>A charger</li>
                                    <li>A sleeping bag</li>
                                    <li>Toiletries</li>
                                </ul>
                                <p>... and yourself.</p>
                            </>
                        ),
                    },
                    {
                        question: "How big are the teams?",
                        answer: (
                            <p>
                                Each team will have up to 3 participants. Teams
                                will be formed at the event so don't worry if
                                you don't have a team!
                            </p>
                        ),
                    },
                    {
                        question: "Is this safe?",
                        answer: (
                            <p>
                                Yes! This event will be fully supervised at all
                                times, if you have more concerns or questions
                                check out our safety guide (tbd) or feel free to
                                reach out to us!
                            </p>
                        ),
                    },
                    {
                        question: "What if I don't know how to code?",
                        answer: (
                            <p>
                                This hackathon is completely beginner friendly,
                                we'll guide you through every step to make sure
                                you successfully complete your project!
                            </p>
                        ),
                    },
                ].map((props, index) => {
                    return createQuestion(props.question, props.answer, index);
                })}
            </div>
            <div className="invisible" style={{ height: "5vh" }} />
            {createQuestion(
                "I still have more questions!",
                <>
                    <p>
                        Feel free to reach out to us! We would love to get in
                        touch with you!
                    </p>
                    <div className="contacts-div">
                        <Line width="15rem" />
                        <Contacts />
                    </div>
                </>,
                -1
            )}
        </section>
    );
}
