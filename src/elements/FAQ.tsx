import { useEffect, useRef, useState, type JSX } from "react";

type QuestionProps = {
    question: string;
    answer: string;
}

function QuestionResponse({question, answer} : QuestionProps) {
    const [opened, setOpened] = useState(false);
    const responseRef = useRef<HTMLDivElement>(null);

    return (
    <div className="question plack rounded padded">
        <button onClick={
            () => {
                setOpened((old) => !old)
            }
        }>
            <h3>{question}</h3>
            <span className="material-icons" style={{
                transform: `rotateZ(${opened ? 180 : 0}deg)`
            }}>keyboard_arrow_down</span>
        </button>
        <div className={`response${opened ? " visible" : ""}`}><p>{answer}</p></div>
    </div>
    );
}

export default function FAQ() {

    return (
        <section className="faq">
            <h2>FAQ</h2>
            <div className="container">
                <QuestionResponse question="Why did the chicken cross the road?" answer="To get to the other side!"/>
                <QuestionResponse question="How much does this cost?" answer="This costs roughly $1000000 to attend."/>
                <QuestionResponse question="What should I make?" answer="Anything sweet. Baked goods are recommended."/>
            </div>
        </section>
    );
}
