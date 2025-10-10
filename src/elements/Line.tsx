import type { ComponentPropsWithoutRef } from "react";

type LineProps = Omit<ComponentPropsWithoutRef<"div">, "className"> & {
    lineWidth?: string;
    lineColor?: string;
    lineMargin?: string;
    width?: string;
};

export default function Line({
    lineWidth = "2px",
    lineColor = "var(--high-grey)",
    lineMargin = "1rem",
    width = "auto",
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
                    width: width,
                }}
            />
        </div>
    );
}
