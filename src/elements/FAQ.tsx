import { useState, type JSX } from "react";

type QuestionProps = {
    question: string;
    answer: string;
    children?: JSX.Element[];
}

function QuestionResponse({question, answer, children=[]} : QuestionProps) {
    const [opened, setOpened] = useState(false);
    
    return (<button className="question plack rounded padded"><p>{question}</p><span className="material-icons">keyboard_arrow_down</span></button>);
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
