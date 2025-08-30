declare type WindowProps = {
    scrollPosition: number;
    viewWidth: number;
    viewHeight: number;
};

declare type VerticalWindowProps = Omit<WindowProps, "viewWidth">;
