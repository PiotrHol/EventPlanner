import React, { useState } from "react";
import "./addTask.scss";
import { Button } from "../Button/Button";
import classNames from "classnames";
import { useForm } from "react-hook-form";

export const AddTask = ({ setIsShow }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskCost, setNewTaskCost] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTaskBtnHandler = (data) => {
    console.log(data);
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
            maxLength={60}
            id="new-task-name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <label
            className={classNames("add-task__label", {
              "add-task__label--focus": newTaskName,
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
              maxLength: 50,
            })}
            className={classNames("add-task__input", {
              "add-task__input--error": errors.taskDescription,
            })}
            maxLength={60}
            id="new-task-description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <label
            className={classNames("add-task__label", {
              "add-task__label--focus": newTaskDescription,
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
            value={newTaskCost}
            onChange={(e) => setNewTaskCost(e.target.value)}
          />
          <label
            className={classNames("add-task__label", {
              "add-task__label--focus": newTaskCost,
            })}
            htmlFor="new-task-cost"
          >
            Kwota{" "}
            {!newTaskCost && (
              <span className="add-task__label--additional">(Opcjonalnie)</span>
            )}
          </label>
        </div>
        <Button icon="far fa-save" text="Zapisz" isStatic={true} />
      </form>
    </div>
  );
};
