import React, { useState } from "react";
import "./guests.scss";
import { eventValidation } from "../validation";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";

export const Guests = ({user, eventId, guests, updateEvent}) => {
    const [isAddGuest, setIsAddGuest] = useState(false);
    const [guestName, setGuestName] = useState("");
    const [isValid, setIsValid] = useState(true);

    const addGuestBtnHandler = () => {
        setIsAddGuest(prev => !prev);
        setGuestName("");
        !isValid && setIsValid(true);
    }

    const saveGuestBtnHandler = event => {
        event.preventDefault();

        if (!eventValidation(guestName)) {
            setIsValid(false);
            return;
        }

        const dataToSet = {
            id: Date.now(),
            name: guestName
        }

        updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
            guests: arrayUnion(dataToSet)
        }).then(() => {
            updateEvent(prev => prev.map(event => {
                if (event.id === eventId) {
                    event.guests.push(dataToSet);
                }
                return event;
            }));
        });

        setIsAddGuest(false);
        setGuestName("");
        !isValid && setIsValid(true);
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
                                <input type="text" maxLength={50} value={guestName} onChange={event => setGuestName(event.target.value)} />
                            </label>
                            <button className="eventPage--guests__newGuestBtn" onClick={saveGuestBtnHandler}>Dodaj</button>
                        </div>
                        {!isValid && <p className="eventPage--guests__wrongInput">Pole nie może być puste!</p>}
                </form>
                )}
                <div className="eventPage--guests__list">
                    <h3 className="eventPage--guests__listTittle">Lista gości ({guests.length} {guests.length > 4 || guests.length < 2 
                    ? (guests.length === 1 ? "osoba" : "osób") : "osoby"}):</h3>
                </div>
            </div>
        </div>
    );
}