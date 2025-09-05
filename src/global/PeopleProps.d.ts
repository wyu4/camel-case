declare type PersonProps = {
    icon?: string;
    name: string;
    label?: string;
    socials: {
        website?: string;
        github?: string;
        mail?: string;
        linkedin?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
    }
}

declare type GroupProps = {
    judges: PeopleProps[];
    mentors: PeopleProps[];
}