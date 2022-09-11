import React, { useState } from "react";
import "./addEvent.scss";
import { Button } from "../Button/Button";

export const AddEvent = ({ setIsShow }) => {
  const [newEventName, setNewEventName] = useState("");
  const [newEventPlace, setNewEventPlace] = useState("");
  const [newEventDate, setNewEventDate] = useState("");

  return (
    <div className="add-event">
      <h2 className="add-event__title">Dodaj wydarzenie</h2>
      <form>
        <div className="add-event__input-box">
          <input
            type="text"
            className="add-event__input"
            maxLength={50}
            id="new-event-name"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
          />
          <label
            className={
              newEventName
                ? "add-event__label add-event__label--focus"
                : "add-event__label"
            }
            htmlFor="new-event-name"
          >
            Nazwa
          </label>
        </div>
        <div className="add-event__input-box">
          <input
            type="text"
            className="add-event__input"
            maxLength={50}
            id="new-event-place"
            value={newEventPlace}
            onChange={(e) => setNewEventPlace(e.target.value)}
          />
          <label
            className={
              newEventPlace
                ? "add-event__label add-event__label--focus"
                : "add-event__label"
            }
            htmlFor="new-event-place"
          >
            Miejsce
          </label>
        </div>
        <div className="add-event__input-box">
          <input
            type="text"
            className="add-event__input"
            value={newEventDate}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            onChange={(e) => setNewEventDate(e.target.value)}
          />
          <label
            className={
              newEventDate
                ? "add-event__label add-event__label--focus"
                : "add-event__label"
            }
            htmlFor="new-event-date"
          >
            Data
          </label>
        </div>
        <Button
          onClickFunction={() => setIsShow(false)}
          icon="far fa-plus-square"
          text="Zapisz"
          isStatic={true}
        />
      </form>
    </div>
  );
};
