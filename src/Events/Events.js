import React, { useState } from "react";
import "./events.scss";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { eventValidation } from "../validation";
import { EventInfo } from "../EventInfo/EventInfo";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Event } from "../Event/Event";
import { Button } from "../Button/Button";
import { Popup } from "../Popup/Popup";
import { AddEvent } from "../AddEvent/AddEvent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addEvent } from "../redux/actions/eventsActions";

export const Events = ({ events, isArchive }) => {
  const [isAddEvent, setIsAddEvent] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [isValidate, setIsValidate] = useState(true);
  const [isShowAddEventPopup, setIsShowAddEventPopup] = useState(false);
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const addEventBtnHandler = async (event) => {
    event.preventDefault();
    if (!eventValidation(eventName, eventPlace, eventDate)) {
      setIsValidate(false);
      return;
    }

    const dataToSet = {
      name: eventName,
      place: eventPlace,
      date: `${eventDate.substr(8, 2)}.${eventDate.substr(
        5,
        2
      )}.${eventDate.substr(0, 4)}`,
      guests: [],
      tasks: [],
    };

    const newEventId = Date.now().toString();

    await setDoc(
      doc(getFirestore(), "users", user, "events", newEventId),
      dataToSet
    );

    dispatch(
      addEvent({
        ...dataToSet,
        id: newEventId,
      })
    );

    setEventName("");
    setEventPlace("");
    setEventDate("");
    setIsValidate(true);
    setIsAddEvent(false);
  };

  if (!isArchive) {
    return (
      <Switch>
        <Route exact path={path}>
          <>
            <div className="home-page__content-header">
              <h2 className="home-page__content-title">Moje wydarzenia:</h2>
              <Button
                onClickFunction={() => {
                  setIsAddEvent((prev) => !prev);
                  setIsValidate(true);
                  setIsShowAddEventPopup(true);
                }}
                icon="far fa-plus-square"
                text="Dodaj wydarzenie"
                isStatic={false}
              />
            </div>
            <Popup isShow={isShowAddEventPopup} setIsShow={(value) => setIsShowAddEventPopup(value)}>
              <AddEvent setIsShow={(value) => setIsShowAddEventPopup(value)} />
            </Popup>
            {/* <div className="home-page__add-event">
              {isAddEvent && (
                <div className="home-page__add-event-box">
                  <form>
                    <div className="home-page__add-event-input">
                      <h3>Nazwa</h3>
                      <input
                        type="text"
                        maxLength={50}
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                      />
                    </div>
                    <div className="home-page__add-event-input">
                      <h3>Miejsce</h3>
                      <input
                        type="text"
                        maxLength={50}
                        value={eventPlace}
                        onChange={(e) => setEventPlace(e.target.value)}
                      />
                    </div>
                    <div className="home-page__add-event-input">
                      <h3>Data</h3>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                      />
                    </div>
                    {!isValidate && <p>Pola nie mogą być puste!</p>}
                    <button onClick={addEventBtnHandler}>Dodaj</button>
                  </form>
                </div>
              )}
            </div> */}
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
