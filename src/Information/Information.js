import React, { useState } from "react";
import "./information.scss";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { eventValidation } from "../validation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateEventData } from "../redux/actions/eventsActions";

export const Information = ({ eventId, name, place, date }) => {
  const [eventName, setEventName] = useState(name);
  const [eventPlace, setEventPlace] = useState(place);
  const [eventDate, setEventDate] = useState(
    `${date.substr(6, 4)}-${date.substr(3, 2)}-${date.substr(0, 2)}`
  );
  const [isEditName, setIsEditName] = useState(false);
  const [isEditPlace, setIsEditPlace] = useState(false);
  const [isEditDate, setIsEditDate] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const saveData = async (
    userId,
    id,
    variableName,
    variable,
    value,
    isToSet
  ) => {
    if (isToSet && variable !== value) {
      await updateDoc(doc(getFirestore(), "users", userId, "events", id), {
        [variableName]: value,
      });
      dispatch(updateEventData(id, variableName, value));
    }
  };

  const nameEditBtn = (event) => {
    event.preventDefault();
    if (!eventValidation(eventName)) {
      return;
    }
    saveData(user, eventId, "name", name, eventName, isEditName);
    setIsEditName((prev) => !prev);
  };

  const placeEditBtn = (event) => {
    event.preventDefault();
    if (!eventValidation(eventPlace)) {
      return;
    }
    saveData(user, eventId, "place", place, eventPlace, isEditPlace);
    setIsEditPlace((prev) => !prev);
  };

  const dateEditBtn = (event) => {
    event.preventDefault();
    if (!eventValidation(eventDate)) {
      return;
    }
    saveData(
      user,
      eventId,
      "date",
      date,
      `${eventDate.substr(8, 2)}.${eventDate.substr(5, 2)}.${eventDate.substr(
        0,
        4
      )}`,
      isEditDate
    );
    setIsEditDate((prev) => !prev);
  };

  return (
    <div className="event-page__content event-page__information">
      <div className="event-page__bar" />
      <form>
        <div className="event-page__information-title">
          <h3>Nazwa wydarzenia:</h3>
          <button onClick={nameEditBtn}>
            {isEditName ? "Zapisz" : "Edytuj"}
          </button>
        </div>
        {isEditName ? (
          <input
            type="text"
            placeholder="Wydarzenie musi mie?? nazw??"
            maxLength={50}
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        ) : (
          <h5>{eventName}</h5>
        )}
        <div className="event-page__information-title">
          <h3>Miejsce wydarzenia:</h3>
          <button onClick={placeEditBtn}>
            {isEditPlace ? "Zapisz" : "Edytuj"}
          </button>
        </div>
        {isEditPlace ? (
          <input
            type="text"
            placeholder="Wydarzenie musi mie?? miejsce"
            maxLength={50}
            value={eventPlace}
            onChange={(e) => setEventPlace(e.target.value)}
          />
        ) : (
          <h5>{eventPlace}</h5>
        )}
        <div className="event-page__information-title">
          <h3>Data wydarzenia:</h3>
          <button onClick={dateEditBtn}>
            {isEditDate ? "Zapisz" : "Edytuj"}
          </button>
        </div>
        {isEditDate ? (
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        ) : (
          <h5>{`${eventDate.substr(8, 2)}.${eventDate.substr(
            5,
            2
          )}.${eventDate.substr(0, 4)}`}</h5>
        )}
      </form>
    </div>
  );
};
