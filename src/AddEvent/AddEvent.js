import React from "react";
import "./addEvent.scss";
import { Button } from "../Button/Button";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addEvent } from "../redux/actions/eventsActions";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export const AddEvent = ({ setIsShow }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addEventBtnHandler = async ({ eventName, eventDate, eventPlace }) => {
    const dataToSet = {
      name: eventName,
      place: eventPlace,
      date: `${eventDate.substr(8, 2)}.${eventDate.substr(
        5,
        2
      )}.${eventDate.substr(0, 4)}`,
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
          />
          <label
            className={classNames("add-event__label", {
              "add-event__label--focus": watch("eventName"),
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
          />
          <label
            className={classNames("add-event__label", {
              "add-event__label--focus": watch("eventPlace"),
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
              { "add-event__input--focus": watch("eventDate") },
              { "add-event__input--error": errors.eventDate }
            )}
            id="new-event-date"
          />
          <label
            className={classNames("add-event__label", {
              "add-event__label--focus": watch("eventDate"),
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
