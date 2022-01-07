import React from "react";
import "./task.scss";

export const Task = ({userId, eventId, task, eventUpdate}) => {
    return (
        <div className={`eventPage--task ${task.isDone && `eventPage--task__inActive`}`}>
            <div className="eventPage--task__info">
                <div className="eventPage--task__name">{task.name}</div>
                <div className="eventPage--task__description">{task.description}</div>
            </div>
            <div className="eventPage--task__cost">
                {(task.cost !== "") && task.cost}
            </div>
            <div className="eventPage--task__actions">
                <span className={`${task.isDone ? `fas` : `far`} fa-check-square`} />
                <span className="fas fa-trash" />
            </div>
        </div>
    );
}