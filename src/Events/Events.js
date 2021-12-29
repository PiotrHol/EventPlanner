import React, { useState } from "react";
import "./events.scss";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { addEventValidation } from "../validation";
import { EventInfo } from "../EventInfo/EventInfo";

export const Events = ({user, events, isArchive, updateData}) => {
    const [isAddEvent, setIsAddEvent] = useState(false);
    const [eventName, setEventName] = useState("");
    const [eventPlace, setEventPlace] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [isValidate, setIsValidate] = useState(true);

    const addEventBtnHandler = event => {
        event.preventDefault();
        if (!addEventValidation(eventName, eventPlace, eventDate)) {
            setIsValidate(false);
            return;
        }
        addDoc(collection(getFirestore(), `users`, `${user}`, `events`), {
            name: eventName,
            place: eventPlace,
            date: `${eventDate.substr(8, 2)}.${eventDate.substr(5, 2)}.${eventDate.substr(0, 4)}`,
            guests: []
        }).then(() => {
            setEventName("");
            setEventPlace("");
            setEventDate("");
            setIsValidate(true);
            setIsAddEvent(false);
            updateData(user);
        });
    }
    
    if(!isArchive) {
        return (
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
                                    <input type="text" value={eventName} onChange={e => setEventName(e.target.value)}/>
                                </div>
                                <div className="homePage--addEvent__input">
                                    <h3>Miejsce</h3>
                                    <input type="text" value={eventPlace} onChange={e => setEventPlace(e.target.value)}/>
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
                    {events.map(singleEvent => <EventInfo key={singleEvent.id} name={singleEvent.name} place={singleEvent.place} 
                    date={singleEvent.date} guests={singleEvent.guests} isActive={true}/>)}
                </div>
            </>
        );
    }
    else {
        return (
            <div className="homePage--events">
                {events.map(singleEvent => <EventInfo key={singleEvent.id} name={singleEvent.name} place={singleEvent.place} 
                date={singleEvent.date} guests={singleEvent.guests} isActive={false}/>)}
                {events.length === 0 && <h2 className="homePage--events__null">Brak wydarzeń</h2>}
            </div>
        );
    }
}