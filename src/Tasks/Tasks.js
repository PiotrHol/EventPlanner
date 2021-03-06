import React, { useState } from "react";
import "./tasks.scss";
import { eventValidation } from "../validation";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { Task } from "../Task/Task";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewTask } from "../redux/actions/eventsActions";

export const Tasks = ({ eventId, tasks }) => {
  const [isAddTask, setIsAddTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCost, setTaskCost] = useState("");
  const [isValid, setIsValid] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addTaskBtnHandler = () => {
    setIsAddTask((prev) => !prev);
    setTaskName("");
    setTaskDescription("");
    setTaskCost("");
    !isValid && setIsValid(true);
  };

  const saveTaskBtnHandler = async (event) => {
    event.preventDefault();
    if (!eventValidation(taskName, taskDescription)) {
      setIsValid(false);
      return;
    }

    const dataToSet = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      cost: !taskCost ? 0 : parseFloat(parseFloat(taskCost).toFixed(2)),
      isDone: false,
    };

    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      tasks: arrayUnion(dataToSet),
    });

    dispatch(addNewTask(eventId, dataToSet));

    setIsAddTask(false);
    setIsValid(true);
  };

  return (
    <div className="event-page__content event-page__tasks">
      <div className="event-page__bar" />
      <div className="event-page__tasks-content">
        <button
          className="event-page__tasks-add-task"
          onClick={addTaskBtnHandler}
        >
          Dodaj zadanie
        </button>
        {isAddTask && (
          <form className="event-page__tasks-new">
            <label className="event-page__tasks-new-title">
              <h3>Nazwa:</h3>
              <input
                type="text"
                maxLength={50}
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
              />
            </label>
            <label className="event-page__tasks-new-title">
              <h3>Opis:</h3>
              <input
                type="text"
                maxLength={50}
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.target.value)}
              />
            </label>
            <label className="event-page__tasks-new-title">
              <h3>Kwota:</h3>
              <input
                type="number"
                placeholder="Opcjonalnie"
                maxLength={50}
                value={taskCost}
                onChange={(event) => setTaskCost(event.target.value)}
              />
            </label>
            <button
              className="event-page__tasks-new-save-btn"
              onClick={saveTaskBtnHandler}
            >
              Dodaj
            </button>
            {!isValid && (
              <p className="event-page__tasks-wrong-input">
                Pola nazwy i opisu nie mog?? by?? puste!
              </p>
            )}
          </form>
        )}
        <div className="event-page__tasks-list">
          <h3 className="event-page__tasks-list-title">Lista zada??:</h3>
          {tasks.map((singleTask) => (
            <Task key={singleTask.id} eventId={eventId} task={singleTask} />
          ))}
        </div>
      </div>
    </div>
  );
};
