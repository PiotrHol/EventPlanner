import React, { useState } from "react";
import "./events.scss";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { eventValidation } from "../validation";
import { EventInfo } from "../EventInfo/EventInfo";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Event } from "../Event/Event";

export const Events = ({user, events, isArchive, updateEvents, updateArchive}) => {
    const [isAddEvent, setIsAddEvent] = useState(false);
    const [eventName, setEventName] = useState("");
    const [eventPlace, setEventPlace] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [isValidate, setIsValidate] = useState(true);
    let {path, url} = useRouteMatch();

    const addEventBtnHandler = event => {
        event.preventDefault();
        if (!eventValidation(eventName, eventPlace, eventDate)) {
            setIsValidate(false);
            return;
        }

        const dataToSet = {
            name: eventName,
            place: eventPlace,
            date: `${eventDate.substr(8, 2)}.${eventDate.substr(5, 2)}.${eventDate.substr(0, 4)}`,
            guests: [],
            tasks: []
        }

        addDoc(collection(getFirestore(), "users", user, "events"), dataToSet).then(dataFromSetting => {
            updateEvents(prev => [...prev, {
                ...dataToSet,
                id: dataFromSetting.id
            }])
            setEventName("");
            setEventPlace("");
            setEventDate("");
            setIsValidate(true);
            setIsAddEvent(false);
        });
    }
    
    if(!isArchive) {
        return (
            <Switch>
                <Route exact path={path}>
                    <>
                        <div className="homePage--addEvent">
                            <div className="homePage--addEvent__btn" onClick={() => {
                                setIsAddEvent(prev => !prev);
                                setIsValidate(true);
                            }}>
                            <span className="far fa-plus-square"/>Dodaj wydarzenie
                        </div>
                        {isAddEvent && (
                            <div className="homePage--addEvent__box">
                                <form>
                                    <div className="homePage--addEvent__input">
                                        <h3>Nazwa</h3>
                                        <input type="text" maxLength={50} value={eventName} onChange={e => setEventName(e.target.value)}/>
                                    </div>
                                    <div className="homePage--addEvent__input">
                                        <h3>Miejsce</h3>
                                        <input type="text" maxLength={50} value={eventPlace} onChange={e => setEventPlace(e.target.value)}/>
                                    </div>
                                    <div className="homePage--addEvent__input">
                                        <h3>Data</h3>
                                        <input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)}/>
                                    </div>
                                    {!isValidate && <p>Pola nie mogą być puste!</p>}
                                    <button onClick={addEventBtnHandler}>Dodaj</button>
                                </form>
                            </div>
                        )}
                        </div>
                        <div className="homePage--events">
                            {events.map(singleEvent => <EventInfo key={singleEvent.id} user={user} data={singleEvent} 
                            isActive={true} eventsUpdate={updateEvents} archiveUpdate={updateArchive} url={url}/>)}
                        </div>
                    </>
                </Route>
                {events.map(singleEvent => <Route key={singleEvent.id} path={`${path}/${singleEvent.id}`}>
                    <Event userId={user} id={singleEvent.id} name={singleEvent.name} place={singleEvent.place} date={singleEvent.date}
                        tasks={singleEvent.tasks} guests={singleEvent.guests} eventUpdate={updateEvents}/>
                </Route>)}
            </Switch>
        );
    }
    else {
        return (
            <div className="homePage--events">
                {events.map(singleEvent => <EventInfo key={singleEvent.id} user={user} data={singleEvent} 
                isActive={false} eventsUpdate={updateEvents} archiveUpdate={updateArchive}/>)}
                {events.length === 0 && <h2 className="homePage--events__null">Brak wydarzeń w archiwum</h2>}
            </div>
        );
    }
}