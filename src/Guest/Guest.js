import React from "react";
import "./guest.scss";
import { doc, updateDoc, arrayRemove, getFirestore } from "firebase/firestore";

export const Guest = ({userId, eventId, guest, eventUpdate}) => {
    const deleteGuestBtnHandler = () => {
        updateDoc(doc(getFirestore(), "users", userId, "events", eventId), {
            guests: arrayRemove(guest)
        }).then(() => {
            eventUpdate(prev => prev.map(event => {
                if (event.id === eventId) {
                    event.guests = event.guests.filter(({id}) => id !== guest.id);
                }
                return event;
            }));
        });
    }

    return (
        <div className="eventPage--guest">
            <h3>{guest.name}</h3>
            <span className="fas fa-trash" title="Usuń" onClick={deleteGuestBtnHandler} />
        </div>
    );
}