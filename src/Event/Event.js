import React from "react";
import "./event.scss";
import { Link } from "react-router-dom";

export const Event = ({ id, name, place, date, tasks, quests, eventUpdate }) => {
  return (
    <div className="eventPage">
        <Link to="/home/events">{name}</Link>
    </div>
  );
};
