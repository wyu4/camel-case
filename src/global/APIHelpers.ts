export const IMAGE_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/";
export const SPONSORS_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/sponsors.json";

export function getImagePath(path: string) {
    return path.startsWith("media/") ? IMAGE_API + path : path;
}
