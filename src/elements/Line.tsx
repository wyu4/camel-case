import type { ComponentPropsWithoutRef } from "react";

type LineProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
    lineWidth: string;
    lineColor?: string;
    lineMargin?: string;
};

export default function Line({
    lineWidth,
    lineColor = "var(--high-grey)",
    lineMargin = "0px",
    ...props
}: LineProps) {
    return (
        <div className="line-container" {...props}>
            <div
                className="line"
                style={{
                    height: lineWidth,
                    backgroundColor: lineColor,
                    marginTop: lineMargin,
                    marginBottom: lineMargin,
                }}
            />
        </div>
    );
}
