import React from "react";
import "./cost.scss";

export const Cost = ({tasks}) => {

    return (
        <div className="eventPage__content eventPage__cost">
            <div className="eventPage__bar"/>
            <div className="eventPage__cost-content">
                <div className="eventPage__cost-main">
                    <h3>Koszty:</h3>
                    <h3 className="eventPage__cost-main-value">{tasks.reduce((allCost, singleCost) => allCost + singleCost.cost, 0)} zł</h3>
                </div>
                <h3 className="eventPage__cost-single-title">Szczegółowe koszty:</h3>
                <ul className="eventPage__cost-single">
                    {tasks.map(({id, name, cost}) => cost !== 0 && <li key={id}>
                    <span className="fas fa-caret-right"/>{name} - <span className="eventPage__cost-single-value">{cost} zł</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}