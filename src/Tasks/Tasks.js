import React, { useState } from "react";
import "./tasks.scss";

export const Tasks = ({user, eventId, tasks, updateEvent}) => {
    const [isAddTask, setIsAddTask] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskCost, setTaskCost] = useState("");

    const addTaskBtnHandler = () => {
        setIsAddTask(prev => !prev);
        setTaskName("");
        setTaskDescription("");
        setTaskCost("");
    }

    const saveTaskBtnHandler = event => {
        event.preventDefault();
        // 
        setIsAddTask(false);

    }

    return (
        <div className="eventPage--content eventPage--tasks">
            <div className="eventPage--bar"/>
            <div className="eventPage--tasksContent">
                <button className="eventPage--tasks__addTask" onClick={addTaskBtnHandler}>Dodaj zadanie</button>
                {isAddTask && (
                    <form className="eventPage--tasks__new">
                        <label className="eventPage--tasks__newTittle">
                            <h3>Nazwa:</h3>
                            <input type="text" maxLength={50} value={taskName} onChange={event => setTaskName(event.target.value)} />
                        </label>
                        <label className="eventPage--tasks__newTittle">
                            <h3>Opis:</h3>
                            <input type="text" maxLength={50} value={taskDescription} 
                            onChange={event => setTaskDescription(event.target.value)} />
                        </label>
                        <label className="eventPage--tasks__newTittle">
                            <h3>Kwota:</h3>
                            <input type="number" placeholder="Opcjonalnie" maxLength={50} value={taskCost} 
                            onChange={event => setTaskCost(event.target.value)} />
                        </label>
                        <button className="eventPage--tasks__newSaveBtn" onClick={saveTaskBtnHandler}>Dodaj</button>
                    </form>
                )}
                <div className="eventPage--tasks__list">
                    <h3 className="eventPage--tasks__listTittle">Lista zadań:</h3>
                </div>
            </div>
        </div>
    );
}