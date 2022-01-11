import React from "react";
import "./event.scss";
import { Information } from "../Information/Information";
import { Tasks } from "../Tasks/Tasks";
import { Guests } from "../Guests/Guests";
import { Cost } from "../Cost/Cost";

export const Event = ({userId, id, name, place, date, tasks, guests, eventUpdate }) => {
  return (
    <div className="eventPage">
      <div className="eventPage--leftContent">
        <Information user={userId} eventId={id} name={name} place={place} date={date} updateEvent={eventUpdate} />
        <Tasks user={userId} eventId={id} tasks={tasks} updateEvent={eventUpdate} />
      </div>
      <div className="eventPage--rightContent">
        <Guests user={userId} eventId={id} guests={guests} updateEvent={eventUpdate} />
        <Cost tasks={tasks} />
      </div>
    </div>
  );
};
