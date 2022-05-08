import React from "react";
import "./task.scss";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getFirestore,
} from "firebase/firestore";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsDoneTask, deleteTask } from "../redux/actions/eventsActions";

export const Task = ({ eventId, task }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const doneBtnHandler = async () => {
    const dataToSet = {
      ...task,
      isDone: !task.isDone,
    };

    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      tasks: arrayRemove(task),
    });

    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      tasks: arrayUnion(dataToSet),
    });

    dispatch(setIsDoneTask(eventId, task.id, dataToSet));
  };

  const trashBtnHandler = async () => {
    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      tasks: arrayRemove(task),
    });

    dispatch(deleteTask(eventId, task.id));
  };

  return (
    <div
      className={classNames("event-page__task", {
        "event-page__task--inActive": task.isDone,
      })}
    >
      <div className="event-page__task-info">
        <div className="event-page__task-name">{task.name}</div>
        <div className="event-page__task-description">{task.description}</div>
      </div>
      <div className="event-page__task-actions">
        <span
          className={classNames(
            { fas: task.isDone, far: !task.isDone },
            "fa-check-square"
          )}
          title="Wykonane"
          onClick={doneBtnHandler}
        />
        <span className="fas fa-trash" title="Usuń" onClick={trashBtnHandler} />
      </div>
    </div>
  );
};
