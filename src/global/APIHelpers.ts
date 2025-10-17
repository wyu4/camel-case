export const IMAGE_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/";
export const SPONSORS_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/sponsors.json";

export const SCHEDULE_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/schedule.json";
export const VENU_API =
    "https://raw.githubusercontent.com/wyu4/camel-storage/refs/heads/main/venue.json";

export const PEOPLE_API =
    "https://raw.githubusercontent.com/wyu4/storage/refs/heads/main/people.json";

export function getImagePath(path: string) {
    return path.startsWith("media/") ? IMAGE_API + path : path;
}
