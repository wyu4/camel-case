import type { JSX } from "react";

type QuestionProps = {
    question: string;
    answer: string;
    children?: JSX.Element[];
}

function QuestionResponse({question, answer, children=[]} : QuestionProps) {
    
    return <div className="question"></div>
}

export default function FAQ() {

    return (
        <section className="faq">
            <h2>FAQ</h2>
            
        </section>
    );
}
