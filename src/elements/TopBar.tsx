export default function TopBar({ ...props }: VerticalWindowProps) {
    return (
        <div
            className={
                "top-bar " +
                (props.scrollPosition > (props.viewHeight/2) ? "visible" : "")
            }
        >
            <button>Top Bar</button>
        </div>
    );
}
