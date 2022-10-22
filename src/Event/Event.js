import React from "react";
import "./event.scss";
import { Information } from "../Information/Information";
import { Tasks } from "../Tasks/Tasks";
import { Guests } from "../Guests/Guests";
import { Cost } from "../Cost/Cost";

export const Event = ({ id, name, place, date, tasks, guests }) => {
  return (
    <div className="event-page">
      <div className="event-page__main-content">
        <div className="event-page__left-content">
          <Information eventId={id} name={name} place={place} date={date} />
          <Tasks eventId={id} tasks={tasks} />
        </div>
        <div className="event-page__right-content">
          <Guests eventId={id} guests={guests} />
          <Cost tasks={tasks} />
        </div>
      </div>
    </div>
  );
};
