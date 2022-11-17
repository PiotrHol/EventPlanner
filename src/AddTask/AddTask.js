import React, { useState } from "react";
import "./addTask.scss";
import { Button } from "../Button/Button";
import classNames from "classnames";

export const AddTask = ({ setIsShow }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskCost, setNewTaskCost] = useState("");

  return (
    <div className="add-task">
      <h2 className="add-task__title">Dodaj zadanie</h2>
      <form>
        <div className="add-task__input-box">
          <input
            type="text"
            className="add-task__input"
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
            className="add-task__input"
            id="new-task-description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
          <label className="add-task__label" htmlFor="new-task-description">
            Opis
          </label>
        </div>
        <div className="add-task__input-box">
          <input
            type="number"
            className="add-task__input"
            id="new-task-cost"
            value={newTaskCost}
            onChange={(e) => setNewTaskCost(e.target.value)}
          />
          <label className="add-task__label" htmlFor="new-task-cost">
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
