import React, { useState } from "react";
import "./tasks.scss";
import { Task } from "../Task/Task";
import { Button } from "../Button/Button";
import { Popup } from "../Popup/Popup";
import { AddTask } from "../AddTask/AddTask";

export const Tasks = ({ eventId, tasks }) => {
  const [isShowAddTaskPopup, setIsShowAddTaskPopup] = useState(false);

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
          {tasks.length > 0 ? (
            tasks.map((singleTask) => (
              <Task key={singleTask.id} eventId={eventId} task={singleTask} />
            ))
          ) : (
            <h3 className="event-page__tasks-list-small-title">Brak zadań</h3>
          )}
        </div>
      </div>
    </div>
  );
};
