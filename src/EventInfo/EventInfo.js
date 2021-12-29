import React from "react";
import "./eventInfo.scss";

export const EventInfo = ({name, place, date, guests, isActive}) => {
    return (
        <div className={`homePage--event ${!isActive && `homePage--archive`}`}>
            <div className="homePage--event__name">{name}</div>
            <div className="homePage--event__place">Miejsce:<br/>{place}</div>
            <div className="homePage--event__date">Data:<br/>{date}</div>
            <div className="homePage--event__guests">Goście:<br/>{guests.length}</div>
            <div className="homePage--event__actions">
                {isActive ?  (
                    <>
                        <span className="fas fa-edit" />
                        <span className="fas fa-archive" />
                    </>
                    
                    ) : (
                    <>
                        <span className="fas fa-undo-alt" />
                        <span className="fas fa-trash" />
                    </>
                    
                    )}
            </div>
        </div>
    );
}