import React, { useState } from "react";
import "./guests.scss";
import { eventValidation } from "../validation";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { Guest } from "../Guest/Guest";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewGuest } from "../redux/actions/eventsActions";
import { Button } from "../Button/Button";
import { Popup } from "../Popup/Popup";
import { AddGuest } from "../AddGuest/AddGuest";

export const Guests = ({ eventId, guests }) => {
  const [isShowAddGuestPopup, setIsShowAddGuestPopup] = useState(false);
  const [isAddGuest, setIsAddGuest] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const addGuestBtnHandler = () => {
    setIsAddGuest((prev) => !prev);
    setGuestName("");
    !isValid && setIsValid(true);
  };

  const saveGuestBtnHandler = async (event) => {
    event.preventDefault();

    if (!eventValidation(guestName)) {
      setIsValid(false);
      return;
    }

    const dataToSet = {
      id: Date.now(),
      name: guestName,
    };

    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      guests: arrayUnion(dataToSet),
    });

    dispatch(addNewGuest(eventId, dataToSet));

    setIsAddGuest(false);
    setGuestName("");
    !isValid && setIsValid(true);
  };

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
          {guests.map((singleGuest) => (
            <Guest key={singleGuest.id} eventId={eventId} guest={singleGuest} />
          ))}
        </div>
      </div>
    </div>
  );
};
