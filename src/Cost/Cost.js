import React from "react";
import "./cost.scss";

export const Cost = ({ name, cost }) => {
  return (
    <div className="event-page__cost">
      <h3 className="event-page__cost-title">{name}</h3>
      <h3 className="event-page__cost-value">{cost} zł</h3>
    </div>
  );
};
