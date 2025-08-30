import { useEffect, useRef, useState, type JSX } from "react";
import Plack from "./Plack";
import { wrapNum } from "../global/NumberHelpers";

function EventSchedule({ schedule }: { schedule: ScheduleProps }) {
    const [tabs, setTabs] = useState<JSX.Element[]>([]);
    const [dayNumber, setDayNumber] = useState(0);
    const eventsContainer = useRef<HTMLDivElement>(null);

    const onLastButtonClick = () => {
        setDayNumber((last) => wrapNum(last - 1, 0, tabs.length));
    };
    const onNextButtonClick = () => {
        setDayNumber((last) => wrapNum(last + 1, 0, tabs.length));
    };

    useEffect(() => {
        if (schedule.length > 0) {
            const createEvent = (
                { time, name }: EventProps,
                eventNumber: number,
                dayNumber: number
            ) => {
                return (
                    <div
                        className="event rounded"
                        key={`${dayNumber}-${eventNumber}-${time}-${name}`}
                    >
                        <p className="time">{time}</p>
                        <p className="name">{name}</p>
                    </div>
                );
            };

            const newTabs: JSX.Element[] = [];
            const createEventTab = (data: EventProps[], dayNumber: number) => {
                const events: JSX.Element[] = [];
                data.forEach((event, i) => {
                    events.push(createEvent(event, i, dayNumber));
                });
                return events;
            };
            schedule.forEach((daySchedule, i) => {
                newTabs.push(<div key={`daySchedule-${i}`}>{createEventTab(daySchedule, i)}</div>);
            });

            setTabs(newTabs);
        }
    }, [schedule]);

    useEffect(() => {
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

export default function Agenda({ schedule }: { schedule: ScheduleProps }) {
    return (
        <section className="agenda">
            <EventSchedule schedule={schedule}></EventSchedule>
        </section>
    );
}
