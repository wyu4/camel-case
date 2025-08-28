import type { ComponentPropsWithRef } from "react";

export default function Plack({
    className = "",
    children,
    ...props
}: ComponentPropsWithRef<"div">) {
    return (
        <div
            className={"intro container plack rounded padded " + className}
            {...props}
        >
            {children}
        </div>
    );
}
