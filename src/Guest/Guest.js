import React from "react";
import "./guest.scss";

export const Guest = ({userId, eventId, guest, eventUpdate}) => {
    return (
        <div className="eventPage--guest">
            <h3>{guest.name}</h3>
            <span className="fas fa-trash" />
        </div>
    );
}