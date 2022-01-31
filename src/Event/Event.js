import React from "react";
import "./event.scss";
import { Information } from "../Information/Information";
import { Tasks } from "../Tasks/Tasks";
import { Guests } from "../Guests/Guests";
import { Cost } from "../Cost/Cost";

export const Event = ({userId, id, name, place, date, tasks, guests, eventUpdate }) => {
  return (
    <div className="event-page">
      <div className="event-page__left-content">
        <Information user={userId} eventId={id} name={name} place={place} date={date} updateEvent={eventUpdate} />
        <Tasks user={userId} eventId={id} tasks={tasks} updateEvent={eventUpdate} />
      </div>
      <div className="event-page__right-content">
        <Guests user={userId} eventId={id} guests={guests} updateEvent={eventUpdate} />
        <Cost tasks={tasks} />
      </div>
    </div>
  );
};
