import type { ComponentPropsWithRef } from "react";
import Gmail from "/images/Gmail.webp";
import Mail from "/images/MailIcon.webp";
import Instagram from "/images/InstagramIcon.webp";
import Github from "/images/GithubIcon.webp";
import { EMAIL_URL, GITHUB_URL, GMAIL_URL, INSTAGRAM_URL } from "../global/APIHelpers";

export default function Contacts({
    className = "",
    iconSize = "calc(var(--spacing) * 2)"
}: ComponentPropsWithRef<"span"> & {
    iconSize?: string;
    white?: boolean;
}) {
    return (
        <span className={"contacts " + className}>
            <a className="mail" href={EMAIL_URL} target="_blank">
                <Icon src={Mail} alt="Mail" iconSize={iconSize} />
            </a>
            <a className="gmail" href={GMAIL_URL} target="_blank">
                <Icon src={Gmail} alt="Gmail" iconSize={iconSize} />
            </a>
            <a className="instagram" href={INSTAGRAM_URL} target="_blank">
                <Icon src={Instagram} alt="Instagram" iconSize={iconSize} />
            </a>
            <a className="github" href={GITHUB_URL} target="_blank">
                <Icon src={Github} alt="GitHub" iconSize={iconSize} />
            </a>
        </span>
    );
}

function Icon({
    src,
    alt,
    iconSize,
}: {
    src: string;
    alt: string;
    iconSize: string;
}) {
    return (
        <img
            src={src}
            alt={alt}
            style={{
                width: iconSize,
            }}
        />
    );
}
