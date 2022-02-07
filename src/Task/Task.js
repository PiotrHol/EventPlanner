import React from "react";
import "./task.scss";
import { doc, updateDoc, arrayUnion, arrayRemove, getFirestore } from "firebase/firestore";
import classNames from "classnames";

export const Task = ({userId, eventId, task, eventUpdate}) => {
    const doneBtnHandler = async () => {
        const dataToSet = {
            ...task,
            isDone: !task.isDone
        }

        await updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
            tasks: arrayRemove(task)
        });

        await updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
            tasks: arrayUnion(dataToSet)
        });

        eventUpdate(prev => prev.map(event => {
            if (event.id === eventId) {
                event.tasks = event.tasks.map(singleTask => {
                    if (singleTask.id === task.id) {
                        return dataToSet;
                    }
                    return singleTask;
                });
            }
            return event;
        }));
    }

    const trashBtnHandler = async () => {
        await updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
            tasks: arrayRemove(task)
        });
        eventUpdate(prev => {
            return prev.map(event => {
                if (event.id === eventId) {
                    event.tasks = event.tasks.filter(({id}) => id !== task.id);
                }
                return event;
            });
        });
    }

    return (
        <div className={classNames("event-page__task", {"event-page__task--inActive": task.isDone})}>
            <div className="event-page__task-info">
                <div className="event-page__task-name">{task.name}</div>
                <div className="event-page__task-description">{task.description}</div>
            </div>
            <div className="event-page__task-actions">
                <span className={classNames({"fas": task.isDone, "far": !task.isDone}, "fa-check-square")} 
                title="Wykonane" onClick={doneBtnHandler} />
                <span className="fas fa-trash" title="Usuń" onClick={trashBtnHandler} />
            </div>
        </div>
    );
}