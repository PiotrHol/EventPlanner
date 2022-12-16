import React from "react";
import "./costs.scss";
import { Cost } from "../Cost/Cost";

export const Costs = ({ tasks }) => {
  return (
    <div className="event-page__content event-page__costs">
      <div className="event-page__bar" />
      <div className="event-page__costs-content">
        <div className="event-page__costs-main">
          <h3 className="event-page__costs-title">Koszty:</h3>
          <h3 className="event-page__costs-main-value">
            {tasks.reduce(
              (allCosts, singleCost) => allCosts + singleCost.cost,
              0
            )}{" "}
            zł
          </h3>
        </div>
        <h3 className="event-page__costs-list-title">Szczegółowe koszty:</h3>
        <ul className="event-page__costs-list">
          {tasks.some((task) => task.cost !== 0) ? (
            tasks.map(
              ({ id, name, cost }) =>
                cost !== 0 && <Cost key={id} name={name} cost={cost} />
            )
          ) : (
            <h3 className="event-page__costs-small-title">Brak kosztów</h3>
          )}
        </ul>
      </div>
    </div>
  );
};
