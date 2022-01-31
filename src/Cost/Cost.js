import React from "react";
import "./cost.scss";

export const Cost = ({tasks}) => {

    return (
        <div className="event-page__content event-page__cost">
            <div className="event-page__bar"/>
            <div className="event-page__cost-content">
                <div className="event-page__cost-main">
                    <h3>Koszty:</h3>
                    <h3 className="event-page__cost-main-value">{tasks.reduce((allCost, singleCost) => allCost + singleCost.cost, 0)} zł</h3>
                </div>
                <h3 className="event-page__cost-single-title">Szczegółowe koszty:</h3>
                <ul className="event-page__cost-single">
                    {tasks.map(({id, name, cost}) => cost !== 0 && <li key={id}>
                    <span className="fas fa-caret-right"/>{name} - <span className="event-page__cost-single-value">{cost} zł</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}