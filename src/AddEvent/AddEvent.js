import React, { useState } from "react";
import "./addEvent.scss";
import { Button } from "../Button/Button";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addEvent } from "../redux/actions/eventsActions";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export const AddEvent = ({ setIsShow }) => {
  const [newEventName, setNewEventName] = useState("");
  const [newEventPlace, setNewEventPlace] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addEventBtnHandler = async (data) => {
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

  return (
    <div className="add-event">
      <h2 className="add-event__title">Dodaj wydarzenie</h2>
      <form onSubmit={handleSubmit(addEventBtnHandler)}>
        <div className="add-event__input-box">
          <input
            type="text"
            {...register("eventName", {
              required: true,
              maxLength: 50,
            })}
            className={classNames("add-event__input", {
              "add-event__input--error": errors.eventName,
            })}
            maxLength={50}
            id="new-event-name"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
          />
          <label
            className={classNames("add-event__label", {
              "add-event__label--focus": newEventName,
            })}
            htmlFor="new-event-name"
          >
            Nazwa
          </label>
        </div>
        <div className="add-event__input-box">
          <input
            type="text"
            {...register("eventPlace", {
              required: true,
              maxLength: 50,
            })}
            className={classNames("add-event__input", {
              "add-event__input--error": errors.eventPlace,
            })}
            maxLength={50}
            id="new-event-place"
            value={newEventPlace}
            onChange={(e) => setNewEventPlace(e.target.value)}
          />
          <label
            className={classNames("add-event__label", {
              "add-event__label--focus": newEventPlace,
            })}
            htmlFor="new-event-place"
          >
            Miejsce
          </label>
        </div>
        <div className="add-event__input-box">
          <input
            type="date"
            {...register("eventDate", { required: true })}
            className={classNames(
              "add-event__input",
              "add-event__input--date",
              { "add-event__input--focus": newEventDate },
              { "add-event__input--error": errors.eventDate }
            )}
            value={newEventDate}
            id="new-event-date"
            onChange={(e) => {
              setNewEventDate(e.target.value);
            }}
          />
          <label
            className={classNames("add-event__label", {
              "add-event__label--focus": newEventDate,
            })}
            htmlFor="new-event-date"
          >
            Data
          </label>
        </div>
        <Button icon="far fa-save" text="Zapisz" isStatic={true} />
      </form>
    </div>
  );
};
