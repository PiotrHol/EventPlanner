import React, { useState } from "react";
import "./event.scss";
import { Information } from "../Information/Information";
import { Tasks } from "../Tasks/Tasks";
import { Guests } from "../Guests/Guests";
import { Cost } from "../Cost/Cost";
import { Button } from "../Button/Button";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

export const Event = ({ id, name, place, date, tasks, guests }) => {
  const [eventName, setEventName] = useState(name);
  const [isEditName, setIsEditName] = useState(false);
  const history = useHistory();

  const editOrSaveBtnHandler = () => {
    setIsEditName((prev) => !prev);
  };

  return (
    <div className="event-page">
      <div className="event-page__nav-bar">
        <div className="event-page__nav-bar-title">
          {isEditName ? (
            <input
              type="text"
              className="event-page__nav-bar-input"
              placeholder={name}
              maxLength={50}
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          ) : (
            <h1>{name}</h1>
          )}
          <span
            className={classNames("event-page__nav-bar-title-icon far", {
              "fa-edit": !isEditName,
              "fa-save": isEditName,
            })}
            onClick={editOrSaveBtnHandler}
            title={isEditName ? "Zapisz" : "Edytuj"}
          />
        </div>
        <div className="event-page__nav-bar-icons">
          <Button
            onClickFunction={() => history.push("/home/events")}
            icon="fas fa-chevron-left"
            text="Powrót"
            isStatic={false}
          />
          <Button
            onClickFunction={() => console.log("To archive")}
            icon="fas fa-archive"
            text="Archiwizuj"
            isStatic={false}
          />
        </div>
      </div>
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
