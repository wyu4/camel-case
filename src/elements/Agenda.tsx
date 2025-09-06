import { useEffect, useRef, useState, type JSX } from "react";
import Plack from "./Plack";
import { wrapNum } from "../global/NumberHelpers";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import Line from "./Line";

const SCHEDULE_API =
    "https://raw.githubusercontent.com/wyu4/storage/refs/heads/main/schedule.json";

function EventInfo() {
    const coordinates: LatLngExpression = [
        45.323467111163716, -75.89449784098387,
    ];

    const markerIcon = new L.Icon({
        iconUrl: "/images/Cababas.webp",
        iconSize: [41, 41],
    });

    return (
        <Plack className="info">
            <h2>Event Rundown</h2>
            <Line lineWidth="2px" lineMargin="1rem" />
            <p>
                <b>Date: </b>November 29 - 30, 2025
            </p>
            <p>
                <b>Location: </b>???
            </p>
            <div className="invisible" style={{ height: "var(--spacing)" }} />
            <MapContainer
                center={coordinates}
                zoom={13}
                scrollWheelZoom={true}
                attributionControl={false}
                className="map-container rounded"
            >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                <Marker position={coordinates} icon={markerIcon} />
            </MapContainer>
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
                    {"<"}
                </button>
                <h3>{`Day ${dayNumber + 1}`}</h3>
                <button
                    className="next transparent"
                    onClick={onNextButtonClick}
                >
                    {">"}
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
                console.error(`Couldn't get schedule: ${e}`);
            }
        };
        getSchedule();
    }, []);

    return (
        <section className="agenda">
            <EventInfo />
            <EventSchedule schedule={scheduleData} />
        </section>
    );
}
