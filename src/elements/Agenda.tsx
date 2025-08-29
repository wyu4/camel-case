import { useEffect, useRef, useState, type JSX } from "react";
import Plack from "./Plack";

function EventSchedule({ schedule }: { schedule: ScheduleProps }) {
    const dayLabel = useRef<HTMLHeadingElement>(null);
    const [tabs, setTabs] = useState<JSX.Element[]>([]);

    const onLastButtonClick = () => {};
    const onNextButtonClick = () => {};

    useEffect(() => {
        if (schedule.length > 0) {
            const createEvent = ({ time, name }: EventProps, index: number) => {
                return (
                    <div
                        className="event rounded"
                        key={`${index}-${time}-${name}`}
                    >
                        <p className="time">{time}</p>
                        <p className="name">{name}</p>
                    </div>
                );
            };

            const newTabs: JSX.Element[] = [];
            const createEventTab = (data: EventProps[]) => {
                const events: JSX.Element[] = [];
                data.forEach((event, i) => {
                    events.push(createEvent(event, i));
                });
                return events;
            };
            schedule.forEach((day) => {
                newTabs.push(<div>{createEventTab(day)}</div>);
            });

            setTabs(newTabs);
        }
    }, [schedule]);

    return (
        <Plack className="schedule">
            <div className="day">
                <button className="last" onClick={onLastButtonClick}></button>
                <h3 ref={dayLabel}>
                    Day 1
                </h3>
                <button className="next" onClick={onNextButtonClick}></button>
            </div>
            <div className="events plack darkener rounded">{tabs[0]}</div>
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
