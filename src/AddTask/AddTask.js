import React from "react";
import "./addTask.scss";
import { Button } from "../Button/Button";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewTask } from "../redux/actions/eventsActions";

export const AddTask = ({ setIsShow, eventId }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addTaskBtnHandler = async ({ taskName, taskDescription, taskCost }) => {
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

    setIsShow(false);
  };

  return (
    <div className="add-task">
      <h2 className="add-task__title">Dodaj zadanie</h2>
      <form onSubmit={handleSubmit(addTaskBtnHandler)}>
        <div className="add-task__input-box">
          <input
            type="text"
            {...register("taskName", {
              required: true,
              maxLength: 50,
            })}
            className={classNames("add-task__input", {
              "add-task__input--error": errors.taskName,
            })}
            maxLength={50}
            id="new-task-name"
          />
          <label
            className={classNames("add-task__label", {
              "add-task__label--focus": watch("taskName"),
            })}
            htmlFor="new-task-name"
          >
            Nazwa
          </label>
        </div>
        <div className="add-task__input-box">
          <input
            type="text"
            {...register("taskDescription", {
              required: true,
              maxLength: 80,
            })}
            className={classNames("add-task__input", {
              "add-task__input--error": errors.taskDescription,
            })}
            maxLength={80}
            id="new-task-description"
          />
          <label
            className={classNames("add-task__label", {
              "add-task__label--focus": watch("taskDescription"),
            })}
            htmlFor="new-task-description"
          >
            Opis
          </label>
        </div>
        <div className="add-task__input-box">
          <input
            type="number"
            {...register("taskCost", {
              max: 100000000,
            })}
            className={classNames("add-task__input", {
              "add-task__input--error": errors.taskCost,
            })}
            id="new-task-cost"
          />
          <label
            className={classNames("add-task__label", {
              "add-task__label--focus": watch("taskCost"),
            })}
            htmlFor="new-task-cost"
          >
            Kwota{" "}
            {!watch("taskCost") && (
              <span className="add-task__label--additional">(Opcjonalnie)</span>
            )}
          </label>
        </div>
        <Button icon="far fa-save" text="Zapisz" isStatic={true} />
      </form>
    </div>
  );
};
