import { type HTMLAttributes } from "react";

type TopBarProps = Omit<
    HTMLAttributes<HTMLDivElement> & {
        scrollPosition: number;
        viewHeight: number;
    },
    "className"
>;

export default function TopBar({
    scrollPosition,
    viewHeight,
    ...props
}: TopBarProps) {
    return (
        <div
            className="top-bar"
            style={{ opacity: scrollPosition > viewHeight / 10 ? 1 : 0 }}
            {...props}
        >
            <button>Foo</button>
            <button>Bar</button>
        </div>
    );
}
