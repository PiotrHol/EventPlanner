import React, { useState } from "react";
import "./guests.scss";

export const Guests = ({user, eventId, guests, updateEvent}) => {
    const [isAddGuest, setIsAddGuest] = useState(false);
    const [name, setName] = useState("");
    const [isValid, setIsValid] = useState(true);

    const addGuestBtnHandler = () => {
        setIsAddGuest(prev => !prev);
        setName("");
    }

    return (
        <div className="eventPage--content eventPage--guests">
            <div className="eventPage--bar"/>
            <div className="eventPage--guestsContent">
                <button className="eventPage--guests__addGuest" onClick={addGuestBtnHandler}>Dodaj gościa</button>
                {isAddGuest && (
                    <form className="eventPage--guests__new">
                        <div className="eventPage--guestes__newInputs">
                            <label className="eventPage--guests__newTittle">
                                <h3>Imię i nazwisko:</h3>
                                <input type="text" maxLength={50} value={name} onChange={event => setName(event.target.value)} />
                            </label>
                            <button className="eventPage--guests__newGuestBtn">Dodaj</button>
                        </div>
                        {!isValid && <p className="eventPage--guests__wrongInput">Pole nie może być puste!</p>}
                </form>
                )}
                <div className="eventPage--guests__list">
                    <h3 className="eventPage--guests__listTittle">Lista gości ({guests.length} {guests.length > 4 || guests.length < 2 
                    ? "osób" : "osoby"}):</h3>
                </div>
            </div>
        </div>
    );
}