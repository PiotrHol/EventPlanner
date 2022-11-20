import React, { useState } from "react";
import "./tasks.scss";
import { eventValidation } from "../validation";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { Task } from "../Task/Task";
import { Button } from "../Button/Button";
import { Popup } from "../Popup/Popup";
import { AddTask } from "../AddTask/AddTask";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewTask } from "../redux/actions/eventsActions";

export const Tasks = ({ eventId, tasks }) => {
  const [isAddTask, setIsAddTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCost, setTaskCost] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isShowAddTaskPopup, setIsShowAddTaskPopup] = useState(false);
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
        <div className="event-page__tasks-header">
          <h3 className="event-page__tasks-list-title">Lista zadań:</h3>
          <Button
            onClickFunction={() => setIsShowAddTaskPopup(true)}
            icon="fas fa-folder-plus"
            text="Dodaj"
            isStatic={true}
          />
        </div>
        <Popup
          isShow={isShowAddTaskPopup}
          setIsShow={(value) => setIsShowAddTaskPopup(value)}
        >
          <AddTask
            setIsShow={(value) => setIsShowAddTaskPopup(value)}
            eventId={eventId}
          />
        </Popup>
        <div className="event-page__tasks-list">
          {tasks.map((singleTask) => (
            <Task key={singleTask.id} eventId={eventId} task={singleTask} />
          ))}
        </div>
      </div>
    </div>
  );
};
