declare type EventProps = {
    name: string;
    time: string;
}

declare type ScheduleProps = EventProps[][]

declare type VenueProps = {
    name: string,
    address: string,
    url: string,
    coordinates: number[]
}