import React, { useState } from "react";
import "./guests.scss";
import { Guest } from "../Guest/Guest";
import { Button } from "../Button/Button";
import { Popup } from "../Popup/Popup";
import { AddGuest } from "../AddGuest/AddGuest";

export const Guests = ({ eventId, guests }) => {
  const [isShowAddGuestPopup, setIsShowAddGuestPopup] = useState(false);

  return (
    <div className="event-page__content event-page__guests">
      <div className="event-page__bar" />
      <div className="event-page__guests-content">
        <div className="event-page__guests-header">
          <h3 className="event-page__guests-title">
            Lista gości:
            {guests.length ? <br /> : ""}
            <span>
              {guests.length
                ? ` (${guests.length} ${
                    guests.length > 4 || guests.length < 2
                      ? guests.length === 1
                        ? "osoba"
                        : "osób"
                      : "osoby"
                  })`
                : ""}
            </span>
          </h3>
          <Button
            onClickFunction={() => setIsShowAddGuestPopup(true)}
            icon="fas fa-user-plus"
            text="Dodaj"
            isStatic={true}
          />
        </div>
        <Popup
          isShow={isShowAddGuestPopup}
          setIsShow={(value) => setIsShowAddGuestPopup(value)}
        >
          <AddGuest
            setIsShow={(value) => setIsShowAddGuestPopup(value)}
            eventId={eventId}
          />
        </Popup>
        <div className="event-page__guests-list">
          {guests.length > 0 ? (
            guests.map((singleGuest) => (
              <Guest
                key={singleGuest.id}
                eventId={eventId}
                guest={singleGuest}
              />
            ))
          ) : (
            <h3 className="event-page__guests-list-small-title">Bez gości</h3>
          )}
        </div>
      </div>
    </div>
  );
};
