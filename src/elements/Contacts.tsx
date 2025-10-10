import type { ComponentPropsWithRef } from "react";
import Gmail from "/images/Gmail.webp";
import Mail from "/images/MailIcon.webp";

export default function Contacts({
    className = "",
}: ComponentPropsWithRef<"span">) {
    return (
        <span className={"contacts " + className}>
            <a
                className="mail"
                href="mailto:camelcasehackathon@gmail.com"
                target="_blank"
            >
                <img src={Mail} />
            </a>
            <a
                className="gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=camelcasehackathon@gmail.com&su=Subject"
                target="_blank"
            >
                <img src={Gmail} />
            </a>
        </span>
    );
}
