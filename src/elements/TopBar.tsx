import { SIGNUP_DISABLED, SIGNUP_URL } from "../global/APIHelpers";
import gsap from "gsap";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";

export default function TopBar({ ...props }: VerticalWindowProps) {
    const [opened, setOpened] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const state = props.scrollPosition > props.viewHeight / 2;
        setVisible(state);
        if (state == false) {
            setOpened(false);
        }
    }, [props.scrollPosition, props.viewHeight]);

    const toggleMenu = () => {
        const newState = !opened;
        setOpened(newState);
    };

    const goto = (id: string) => {
        setOpened(false);
        gsap.to(window, {
            duration: 2,
            scrollTo: id,
            ease: "Power1.easeInOut",
        });
    };

    const signup = () => {
        window.open(SIGNUP_URL)?.focus();
    };

    const schedule = () => {
        goto("#schedule");
    };

    const sponsors = () => {
        goto("#sponsors");
    };

    const faq = () => {
        goto("#faq");
    };

    return (
        <div
            className={
                "top-bar " +
                (visible || opened ? "visible" : "") +
                " " +
                (opened ? "opened" : "")
            }
        >
            <div className="menu">
                <ol>
                    <li>
                        <button
                            className={SIGNUP_DISABLED ? "disabled" : ""}
                            onClick={signup}
                        >
                            sign up
                        </button>
                    </li>

                    <li>
                        <button onClick={schedule}>schedule</button>
                    </li>
                    <li>
                        <button onClick={sponsors}>sponsors</button>
                    </li>
                    <li>
                        <button onClick={faq}>FAQ</button>
                    </li>
                </ol>
                <Contacts />
            </div>
            <div className="top">
                <button onClick={toggleMenu} className="menu-button" />
                <div className="section left">
                    <Title />
                </div>
                <div className="section middle">
                    <button hidden={SIGNUP_DISABLED} onClick={signup}>
                        sign up
                    </button>
                    <button onClick={schedule}>schedule</button>
                    <button onClick={sponsors}>sponsors</button>
                    <button onClick={faq}>FAQ</button>
                </div>
                <div className="section right">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
}

function Title() {
    return <h1>camelCase</h1>;
}

function ContactInfo() {
    return <Contacts iconSize="2rem" />;
}
