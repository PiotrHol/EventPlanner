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
import { MiniButton } from "../MiniButton/MiniButton";

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
        {task.isDone ? (
          <MiniButton
            onClickFunction={doneBtnHandler}
            icon="fa-undo"
            text="Przywróć"
            isActive={task.isDone ? false : true}
          />
        ) : (
          <MiniButton
            onClickFunction={doneBtnHandler}
            icon="fa-check"
            text="Zrobione"
            isActive={task.isDone ? false : true}
          />
        )}
        <MiniButton
          onClickFunction={trashBtnHandler}
          icon="fa-trash"
          text="Usuń"
          isActive={task.isDone ? false : true}
        />
      </div>
    </div>
  );
};
