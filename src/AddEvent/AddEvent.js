import React, { useState } from "react";
import "./addEvent.scss";

export const AddEvent = () => {
  const [newEventName, setNewEventName] = useState("");
  const [newEventPlace, setNewEventPlace] = useState("");
  const [newEventDate, setNewEventDate] = useState("");

  return (
    <div className="add-event">
      <form>
        <div className="add-event__input-box">
          <label htmlFor="new-event-name">Nazwa</label>
          <input
            type="text"
            maxLength={50}
            id="new-event-name"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
          />
        </div>
        <div className="add-event__input-box">
          <label htmlFor="new-event-place">Miejsce</label>
          <input
            type="text"
            maxLength={50}
            id="new-event-place"
            value={newEventPlace}
            onChange={(e) => setNewEventPlace(e.target.value)}
          />
        </div>
        <div className="add-event__input-box">
          <label htmlFor="new-event-date">Data</label>
          <input
            type="date"
            value={newEventDate}
            onChange={(e) => setNewEventDate(e.target.value)}
          />
        </div>
        <button>Dodaj</button>
      </form>
    </div>
  );
};
