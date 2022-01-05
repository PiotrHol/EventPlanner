import React, {useState} from "react";
import "./information.scss";

export const Information = ({id, name, place, date}) => {
    const [eventName, setEventName] = useState(name);
    const [eventPlace, setEventPlace] = useState(place);
    const [eventDate, setEventDate] = useState(`${date.substr(6, 4)}-${date.substr(3, 2)}-${date.substr(0, 2)}`);
    const [isEditName, setIsEditName] = useState(false);
    const [isEditPlace, setIsEditPlace] = useState(false);
    const [isEditDate, setIsEditDate] = useState(false);

    const nameEditBtn = event => {
        event.preventDefault();
        setIsEditName(prev => !prev);
    }

    const placeEditBtn = event => {
        event.preventDefault();
        setIsEditPlace(prev => !prev);
    }

    const dateEditBtn = event => {
        event.preventDefault();
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
                : <h5>{name}</h5>}
                <div className="eventPage--information__tittle">
                    <h3>Miejsce wydarzenia:</h3>
                    <button onClick={placeEditBtn}>{isEditPlace ? "Zapisz" : "Edytuj"}</button>
                </div>
                {isEditPlace ? <input type="text" maxLength={50} value={eventPlace} onChange={e => setEventPlace(e.target.value)} /> 
                : <h5>{place}</h5>}
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