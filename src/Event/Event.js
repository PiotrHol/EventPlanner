import React from "react";
import "./event.scss";
import { Information } from "../Information/Information";

export const Event = ({userId, id, name, place, date, tasks, quests, eventUpdate }) => {
  return (
    <div className="eventPage">
      <div className="eventPage--leftContent">
        <Information user={userId} eventId={id} name={name} place={place} date={date} updateEvent={eventUpdate} />
      </div>
      <div className="eventPage--rightContent">

      </div>
    </div>
  );
};
