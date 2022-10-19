import React, { useState } from "react";
import "./eventInfo.scss";
import { setDoc, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  moveToArchive,
  moveToEvents,
  deleteFromArchive,
} from "../redux/actions/eventsActions";

export const EventInfo = ({ data, isActive, url }) => {
  const [showActionsSection, setShowActionsSection] = useState(false);
  const dataBase = getFirestore();
  const dataToSet = {
    name: data.name,
    place: data.place,
    date: data.date,
    guests: data.guests,
    tasks: data.tasks,
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const archiveBtnHandler = async () => {
    await setDoc(doc(dataBase, "users", user, "archive", data.id), dataToSet);
    await deleteDoc(doc(dataBase, "users", user, "events", data.id));
    dispatch(moveToArchive(data));
  };

  const returnBtnHandler = async () => {
    await setDoc(doc(dataBase, "users", user, "events", data.id), dataToSet);
    await deleteDoc(doc(dataBase, "users", user, "archive", data.id));
    dispatch(moveToEvents(data));
  };

  const trashBtnHandler = async () => {
    await deleteDoc(doc(dataBase, "users", user, "archive", data.id));
    dispatch(deleteFromArchive(data));
  };

  return (
    <div
      className={classNames("home-page__event", {
        "home-page__archive": !isActive,
      })}
      onClick={() => setShowActionsSection(prev => !prev)}
      onMouseLeave={() => setShowActionsSection(false)}
    >
      <div className="home-page__event-name">{data.name}</div>
      <div className="home-page__event-place">
        <span className="home-page__event-label">Miejsce:</span>
        <br />
        {data.place}
      </div>
      <div className="home-page__event-date">
        <span className="home-page__event-label">Data:</span>
        <br />
        {data.date}
      </div>
      <div className="home-page__event-guests">
        <span className="home-page__event-label">Goście:</span>
        <br />
        {data.guests.length}
      </div>
      <div
        className={classNames("home-page__event-actions", {
          "home-page__event-actions--hide": !showActionsSection,
        })}
      >
        <div className="home-page__event-actions-box">
          {isActive ? (
            <Link to={`${url}/${data.id}`}>
              <span className="home-page__event-actions-link">
                <span className="fas fa-edit home-page__event-actions-icon" />
                Edytuj
              </span>
            </Link>
          ) : (
            <span
              className="home-page__event-actions-link"
              onClick={returnBtnHandler}
            >
              <span className="fas fa-undo-alt home-page__event-actions-icon" />
              Przywróć
            </span>
          )}

          <span
            className="home-page__event-actions-link"
            onClick={isActive ? archiveBtnHandler : trashBtnHandler}
          >
            <span
              className={classNames("fas home-page__event-actions-icon", {
                "fa-archive": isActive,
                "fa-trash": !isActive,
              })}
            />
            {isActive ? "Archiwizuj" : "Usuń"}
          </span>
        </div>
      </div>
    </div>
  );
};
