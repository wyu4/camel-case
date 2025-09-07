export default function TopBar({ ...props }: VerticalWindowProps) {
    return (
        <div
            className="top-bar"
            style={{ opacity: props.scrollPosition > props.viewHeight / 10 ? 1 : 0 }}
        >
            <button>Top Bar</button>
        </div>
    );
}
