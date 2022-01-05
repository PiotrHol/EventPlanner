import React, {useState} from "react";
import "./information.scss";
import { doc, updateDoc, getFirestore } from "firebase/firestore";

export const Information = ({user, eventId, name, place, date, updateEvent}) => {
    const [eventName, setEventName] = useState(name);
    const [eventPlace, setEventPlace] = useState(place);
    const [eventDate, setEventDate] = useState(`${date.substr(6, 4)}-${date.substr(3, 2)}-${date.substr(0, 2)}`);
    const [isEditName, setIsEditName] = useState(false);
    const [isEditPlace, setIsEditPlace] = useState(false);
    const [isEditDate, setIsEditDate] = useState(false);

    const saveData = (userId, id, variableName, variable, value, isToSet, setData) => {
        if (isToSet && variable !== value) {
            updateDoc(doc(getFirestore(), "users", userId, "events", id), {[variableName] : value}).then(() => {
                setData(prev => {
                    return prev.map(event => {
                       if (event.id === id) {
                            event = {
                               ...event,
                               [variableName] : value
                           }
                       }
                       return event;
                   });
               });
            })
        }
    }

    const nameEditBtn = event => {
        event.preventDefault();
        saveData(user, eventId, "name", name, eventName, isEditName, updateEvent);
        setIsEditName(prev => !prev);
    }

    const placeEditBtn = event => {
        event.preventDefault();
        saveData(user, eventId, "place", place, eventPlace, isEditPlace, updateEvent);
        setIsEditPlace(prev => !prev);
    }

    const dateEditBtn = event => {
        event.preventDefault();
        saveData(user, eventId, "date", date, `${eventDate.substr(8, 2)}.${eventDate.substr(5, 2)}.${eventDate.substr(0, 4)}`,
        isEditDate, updateEvent);
        setIsEditDate(prev => !prev);
    }

    return (
        <div className="eventPage--content eventPage--information">
            <div className="eventPage--bar"/>
            <form>
                <div className="eventPage--information__tittle">
                    <h3>Nazwa wydarzenia:</h3>
                    <button onClick={nameEditBtn}>{isEditName ? "Zapisz" : "Edytuj"}</button>
                </div>
                {isEditName ? <input type="text" maxLength={50} value={eventName} onChange={e => setEventName(e.target.value)} /> 
                : <h5>{eventName}</h5>}
                <div className="eventPage--information__tittle">
                    <h3>Miejsce wydarzenia:</h3>
                    <button onClick={placeEditBtn}>{isEditPlace ? "Zapisz" : "Edytuj"}</button>
                </div>
                {isEditPlace ? <input type="text" maxLength={50} value={eventPlace} onChange={e => setEventPlace(e.target.value)} /> 
                : <h5>{eventPlace}</h5>}
                <div className="eventPage--information__tittle">
                    <h3>Data wydarzenia:</h3>
                    <button onClick={dateEditBtn}>{isEditDate ? "Zapisz" : "Edytuj"}</button>
                </div>
                {isEditDate ? <input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} /> : (
                    <h5>{`${eventDate.substr(8, 2)}.${eventDate.substr(5, 2)}.${eventDate.substr(0, 4)}`}</h5>)}
            </form>
        </div>
    );
}