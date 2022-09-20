import React, { useState } from "react";
import "./addEvent.scss";
import { Button } from "../Button/Button";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addEvent } from "../redux/actions/eventsActions";

export const AddEvent = ({ setIsShow }) => {
  const [newEventName, setNewEventName] = useState("");
  const [newEventPlace, setNewEventPlace] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const addEventBtnHandler = async (event) => {
    event.preventDefault();
    // if (!eventValidation(eventName, eventPlace, eventDate)) {
    //   setIsValidate(false);
    //   return;
    // }

    const dataToSet = {
      name: newEventName,
      place: newEventPlace,
      date: `${newEventDate.substr(8, 2)}.${newEventDate.substr(
        5,
        2
      )}.${newEventDate.substr(0, 4)}`,
      guests: [],
      tasks: [],
    };

    const newEventId = Date.now().toString();

    await setDoc(
      doc(getFirestore(), "users", user, "events", newEventId),
      dataToSet
    );

    dispatch(
      addEvent({
        ...dataToSet,
        id: newEventId,
      })
    );

    setNewEventName("");
    setNewEventPlace("");
    setNewEventDate("");
    setIsShow(false);
  };

  const onBlurDateInput = (event) => {
    if (!newEventDate) {
      event.target.type = "text";
    }
  }

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
            onBlur={(e) => onBlurDateInput(e)}
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
          onClickFunction={addEventBtnHandler}
          icon="far fa-plus-square"
          text="Zapisz"
          isStatic={true}
        />
      </form>
    </div>
  );
};
