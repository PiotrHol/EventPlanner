import React from "react";
import "./event.scss";
import { Information } from "../Information/Information";

export const Event = ({ id, name, place, date, tasks, quests, eventUpdate }) => {
  return (
    <div className="eventPage">
      <div className="eventPage--leftContent">
        <Information id={id} name={name} place={place} date={date} />
      </div>
      <div className="eventPage--rightContent">

      </div>
    </div>
  );
};
