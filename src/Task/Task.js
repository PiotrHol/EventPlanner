import React from "react";
import "./task.scss";
import { doc, updateDoc, arrayUnion, arrayRemove, getFirestore } from "firebase/firestore";

export const Task = ({userId, eventId, task, eventUpdate}) => {
    const doneBtnHandler = () => {
        const dataToSet = {
            ...task,
            isDone: !task.isDone
        }

        updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
            tasks: arrayRemove(task)
        }).then(() => {
            updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
                tasks: arrayUnion(dataToSet)
            }).then(() => {
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
            });
        });
    }

    const trashBtnHandler = () => {
        updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
            tasks: arrayRemove(task)
        }).then(() => {
            eventUpdate(prev => {
                return prev.map(event => {
                    if (event.id === eventId) {
                         event.tasks = event.tasks.filter(({id}) => id !== task.id);
                    }
                    return event;
                });
            });
        });
    }

    return (
        <div className={`eventPage--task ${task.isDone && `eventPage--task__inActive`}`}>
            <div className="eventPage--task__info">
                <div className="eventPage--task__name">{task.name}</div>
                <div className="eventPage--task__description">{task.description}</div>
            </div>
            <div className="eventPage--task__actions">
                <span className={`${task.isDone ? `fas` : `far`} fa-check-square`} title="Wykonane" onClick={doneBtnHandler} />
                <span className="fas fa-trash" title="Usuń" onClick={trashBtnHandler} />
            </div>
        </div>
    );
}