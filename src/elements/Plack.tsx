import type { ComponentPropsWithRef } from "react";

export default function Plack({
    className = "",
    children,
    ...props
}: ComponentPropsWithRef<"div">) {
    return (
        <div
            className={"plack rounded padded " + className}
            {...props}
        >
            {children}
        </div>
    );
}
