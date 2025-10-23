import type { ComponentPropsWithRef } from "react";
import Gmail from "/images/Gmail.webp";
import Mail from "/images/MailIcon.webp";
import { EMAIL_URL, GMAIL_URL } from "../global/APIHelpers";

export default function Contacts({
    className = "",
}: ComponentPropsWithRef<"span">) {
    return (
        <span className={"contacts " + className}>
            <a
                className="mail"
                href={EMAIL_URL}
                target="_blank"
            >
                <img src={Mail} />
            </a>
            <a
                className="gmail"
                href={GMAIL_URL}
                target="_blank"
            >
                <img src={Gmail} />
            </a>
        </span>
    );
}
