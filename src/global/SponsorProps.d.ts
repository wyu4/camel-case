declare type SponsorProps = {
    name: string;
    icon: string;
};

declare type SponsorTier = "byte" | "kilobyte" | "megabyte" | "gigabyte";
declare type AllSponsorsProps = {
    tiers: {
        byte: SponsorProps[];
        kilobyte: SponsorProps[];
        megabyte: SponsorProps[];
        gigabyte: SponsorProps[];
    };
    package: string;
};
