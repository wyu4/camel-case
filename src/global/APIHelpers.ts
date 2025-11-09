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

export const SPONSORSHIP_URL = "/sponsorship/"

export const SIGNUP_DISABLED = false;

export const SIGNUP_URL = "https://camelcase.fillout.com/sign-up";

export const EMAIL_URL = "mailto:camelcasehackathon@gmail.com";

export const GMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=camelcasehackathon@gmail.com&su=Subject";

export const JUKEBOX_URL = "https://www.jukeboxprint.com/custom-stickers";

export const INSTAGRAM_URL = "https://www.instagram.com/camelcase_ottawa";

export const GITHUB_URL = "https://github.com/wyu4/camel-case";

export function getImagePath(path: string) {
    return path.startsWith("media/") ? IMAGE_API + path : path;
}