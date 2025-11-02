import { SIGNUP_DISABLED, SIGNUP_URL } from "../global/APIHelpers";
import gsap from "gsap";

export default function TopBar({ ...props }: VerticalWindowProps) {
    const goto = (id: string) => {
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
                (props.scrollPosition > props.viewHeight / 2 ? "visible" : "")
            }
        >
            <div className="section left"></div>
            <div className="section middle">
                <button hidden={SIGNUP_DISABLED} onClick={signup}>
                    Sign Up
                </button>
                <button onClick={schedule}>schedule</button>
                <button onClick={sponsors}>sponsors</button>
                <button onClick={faq}>FAQ</button>
            </div>
            <div className="section right"></div>
        </div>
    );
}
