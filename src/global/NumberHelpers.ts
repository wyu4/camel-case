export function wrapNum(n: number, min: number, max: number) {
    const range = max - min;
    return ((((n - min) % range) + range) % range) + min;
}
