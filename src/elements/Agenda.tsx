import { useEffect, useRef, useState, type JSX } from "react";
import Plack from "./Plack";
import { wrapNum } from "../global/NumberHelpers";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import Line from "./Line";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { SCHEDULE_API, VENU_API } from "../global/APIHelpers";

function MapViewController({
    zoom,
    center,
}: {
    zoom: number;
    center: LatLngExpression;
}) {
    const map = useMap();
    useEffect(() => {
        if (map.getZoom() !== zoom) {
            map.setZoom(zoom);
        }
        if (map.getCenter() !== center) {
            map.setView(center);
        }
    }, [center, zoom, map]);

    return null;
}

function EventMap({ venue }: { venue: VenueProps }) {
    const defaultCenter: LatLngExpression = [31.005863, -41.011643];

    const { name, address, coordinates, url } = venue;

    const [latLong, setLatLong] = useState<LatLngExpression | null>(null);
    const [zoom, setZoom] = useState<number>(1);
    const [center, setCenter] = useState<LatLngExpression>(defaultCenter);

    const markerIcon = new L.Icon({
        iconUrl: "/images/Cababas.webp",
        iconSize: [41, 41],
    });

    useEffect(() => {
        setLatLong(
            coordinates.length == 2 ? (coordinates as LatLngExpression) : null
        );
    }, [coordinates]);

    useEffect(() => {
        setZoom(latLong == null ? 1 : 13);
        setCenter(latLong != null ? latLong : defaultCenter);
    }, [latLong]);

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            attributionControl={false}
            className="map-container rounded"
        >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            {latLong != null ? (
                <Marker position={latLong} icon={markerIcon} />
            ) : null}
            <MapViewController zoom={zoom} center={center} />
        </MapContainer>
    );
}

function EventInfo({
    schedule,
    venue,
}: {
    schedule: ScheduleProps;
    venue: VenueProps;
}) {
    return (
        <Plack className="info">
            <h2>Event Info</h2>
            <Line />
            <p>
                <b>Date: </b>November 29 - 30, 2025
            </p>
            <p>
                <b>Location: </b>
                {venue.url === "" ? (
                    venue.address
                ) : (
                    <a href={venue.url}>{venue.address}</a>
                )}
            </p>
            <EventSchedule schedule={schedule} />
        </Plack>
    );
}

function EventSchedule({ schedule }: { schedule: ScheduleProps }) {
    const [tabs, setTabs] = useState<JSX.Element[]>([]);
    const [dayNumber, setDayNumber] = useState(0);
    const eventsContainer = useRef<HTMLDivElement>(null);
    const timeRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    const onLastButtonClick = () => {
        setDayNumber((last) => wrapNum(last - 1, 0, tabs.length));
    };
    const onNextButtonClick = () => {
        setDayNumber((last) => wrapNum(last + 1, 0, tabs.length));
    };

    useEffect(() => {
        if (schedule.length > 0) {
            // Loading events
            const createEvent = (
                // Individual events
                { time, name }: EventProps,
                eventNumber: number,
                dayNumber: number
            ) => {
                return (
                    <div
                        className="event rounded"
                        key={`${dayNumber}-${eventNumber}-${time}-${name}`}
                    >
                        <p
                            ref={(element) => {
                                timeRefs.current.push(element);
                            }}
                            className="time"
                        >
                            {time}
                        </p>
                        <p className="name">{name}</p>
                    </div>
                );
            };

            const newTabs: JSX.Element[] = [];
            const createDayTab = (data: EventProps[], dayNumber: number) => {
                // Individual tabs with events
                const events: JSX.Element[] = [];
                data.forEach((event, i) => {
                    events.push(createEvent(event, i, dayNumber));
                });
                return events;
            };

            schedule.forEach((daySchedule, i) => {
                // Create tabs and events for the full schedule
                newTabs.push(
                    <div className="tab" key={`daySchedule-${i}`}>
                        {createDayTab(daySchedule, i)}
                    </div>
                );
            });

            setTabs(newTabs);
        }
    }, [schedule]);

    useEffect(() => {
        // Setting a uniform width to all time elements
        const current = timeRefs.current;
        if (current.length > 1) {
            let greatestWidth = 0;
            // Get the widest one
            current.forEach((ref) => {
                if (ref === null) {
                    return;
                }
                const width = ref.getBoundingClientRect().width;
                if (greatestWidth < width) {
                    greatestWidth = width;
                }
            });
            // Set all the widths to the widest one
            current.forEach((ref) => {
                if (ref === null) {
                    return;
                }
                ref.style.minWidth = `${greatestWidth}px`;
            });
        }
    }, [tabs]);

    useEffect(() => {
        // Switch between tabs when dayNumber changes
        if (eventsContainer.current) {
            eventsContainer.current.style.transform = `translateX(-${
                dayNumber * 100
            }%)`;
        }
    }, [dayNumber]);

    return (
        <Plack className="schedule">
            <div className="day">
                <button
                    className="last transparent"
                    onClick={onLastButtonClick}
                >
                    <span className="material-icons">arrow_left</span>
                </button>
                <h3>{`Day ${dayNumber + 1}`}</h3>
                <button
                    className="next transparent"
                    onClick={onNextButtonClick}
                >
                    <span className="material-icons">arrow_right</span>
                </button>
            </div>
            <div className="events-container plack darkener rounded">
                <div className="events transparent" ref={eventsContainer}>
                    {tabs}
                </div>
            </div>
        </Plack>
    );
}

export default function Agenda() {
    const [scheduleData, setScheduleData] = useState<ScheduleProps>([]);
    const [venueData, setVenueData] = useState<VenueProps>({
        name: "???",
        address: "Loading",
        url: "",
        coordinates: [],
    });

    useEffect(() => {
        const getSchedule = async () => {
            try {
                const response = await fetch(SCHEDULE_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`);
                }
                const formattedResult: ScheduleProps = await response.json();
                setScheduleData(formattedResult);
            } catch (e: unknown) {
                setScheduleData([
                    [
                        {
                            time: "",
                            name: "Couldn't get events.",
                        },
                    ],
                ]);
                console.error(`Couldn't get schedule: ${e}`);
            }
        };
        const getVenue = async () => {
            try {
                const response = await fetch(VENU_API);
                if (!response.ok) {
                    throw new Error(`Request code ${response.status}`);
                }
                const formattedResult: VenueProps = await response.json();
                setVenueData(formattedResult);
            } catch (e: unknown) {
                setVenueData({
                    name: "???",
                    address: "Couldn't get address.",
                    url: "",
                    coordinates: [],
                });
                console.error(`Couldn't get venue: ${e}`);
            }
        };
        getSchedule();
        getVenue();
    }, []);

    return (
        <section className="agenda">
            <EventMap venue={venueData} />
            <EventInfo schedule={scheduleData} venue={venueData} />
        </section>
    );
}
