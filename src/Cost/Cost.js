import React from "react";
import "./cost.scss";

export const Cost = ({tasks}) => {

    return (
        <div className="eventPage--content eventPage--cost">
            <div className="eventPage--bar"/>
            <div className="eventPage--costContent">
                <div className="eventPage--cost__main">
                    <h3>Koszty:</h3>
                    <h3 className="eventPage--cost__mainCost">{tasks.reduce((allCost, singleCost) => allCost + singleCost.cost, 0)} zł</h3>
                </div>
                <h3 className="eventPage--cost__singleTitle">Szczegółowe koszty:</h3>
                <ul className="eventPage--cost__single">
                    {tasks.map(task => task.cost !== 0 && <li key={task.id}>
                    <span className="fas fa-caret-right"/>{task.name} - <span className="eventPage--cost__singleCost">{task.cost} zł</span>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}