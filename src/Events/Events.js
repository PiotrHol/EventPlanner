import React, { useState } from "react";
import "./events.scss";
import { EventInfo } from "../EventInfo/EventInfo";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Event } from "../Event/Event";
import { Button } from "../Button/Button";
import { Popup } from "../Popup/Popup";
import { AddEvent } from "../AddEvent/AddEvent";

export const Events = ({ events, isArchive }) => {
  const [isShowAddEventPopup, setIsShowAddEventPopup] = useState(false);
  let { path, url } = useRouteMatch();

  if (!isArchive) {
    return (
      <Switch>
        <Route exact path={path}>
          <>
            <div className="home-page__content-header">
              <h2 className="home-page__content-title">Moje wydarzenia:</h2>
              <Button
                onClickFunction={() => setIsShowAddEventPopup(true)}
                icon="far fa-plus-square"
                text="Dodaj wydarzenie"
                isStatic={false}
              />
            </div>
            <Popup isShow={isShowAddEventPopup} setIsShow={(value) => setIsShowAddEventPopup(value)}>
              <AddEvent setIsShow={(value) => setIsShowAddEventPopup(value)} />
            </Popup>
            <div className="home-page__events">
              {events.map((singleEvent) => (
                <EventInfo
                  key={singleEvent.id}
                  data={singleEvent}
                  isActive={true}
                  url={url}
                />
              ))}
            </div>
          </>
        </Route>
        {events.map(({ id, name, place, date, tasks, guests }) => (
          <Route key={id} path={`${path}/${id}`}>
            <Event
              id={id}
              name={name}
              place={place}
              date={date}
              tasks={tasks}
              guests={guests}
            />
          </Route>
        ))}
      </Switch>
    );
  } else {
    return (
      <div className="home-page__events">
        <h2 className="home-page__content-title">Archiwum wydarzeń:</h2>
        {events.map((singleEvent) => (
          <EventInfo key={singleEvent.id} data={singleEvent} isActive={false} />
        ))}
        {!events.length && (
          <h2 className="home-page__events-null">Brak wydarzeń w archiwum</h2>
        )}
      </div>
    );
  }
};
