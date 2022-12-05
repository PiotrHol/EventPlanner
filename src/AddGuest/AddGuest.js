import React, { useState } from "react";
import "./addGuest.scss";
import classNames from "classnames";
import { Button } from "../Button/Button";

export const AddGuest = ({ setIsShow }) => {
  const [newGuestName, setNewGuestName] = useState("");

  return (
    <div className="add-guest">
      <h2 className="add-guest__title">Dodaj gościa</h2>
      <form>
        <div className="add-guest__input-box">
          <input
            type="text"
            className="add-guest__input"
            maxLength={50}
            id="new-guest-name"
            value={newGuestName}
            onChange={(e) => setNewGuestName(e.target.value)}
          />
          <label
            className={classNames("add-guest__label", {
              "add-guest__label--focus": newGuestName,
            })}
            htmlFor="new-guest-name"
          >
            Imię i nazwisko
          </label>
        </div>
        <Button icon="far fa-save" text="Zapisz" isStatic={true} />
      </form>
    </div>
  );
};
