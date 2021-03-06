import React, { useState } from "react";
import "./guests.scss";
import { eventValidation } from "../validation";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { Guest } from "../Guest/Guest";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewGuest } from "../redux/actions/eventsActions";

export const Guests = ({ eventId, guests }) => {
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
        <button
          className="event-page__guests-add-guest"
          onClick={addGuestBtnHandler}
        >
          Dodaj gościa
        </button>
        {isAddGuest && (
          <form className="event-page__guests-new">
            <div className="event-page__guests-new-inputs">
              <label className="event-page__guests-new-tittle">
                <h3>Imię i nazwisko:</h3>
                <input
                  type="text"
                  maxLength={50}
                  value={guestName}
                  onChange={(event) => setGuestName(event.target.value)}
                />
              </label>
              <button
                className="event-page__guests-new-btn"
                onClick={saveGuestBtnHandler}
              >
                Dodaj
              </button>
            </div>
            {!isValid && (
              <p className="event-page__guests-wrong-input">
                Pole nie może być puste!
              </p>
            )}
          </form>
        )}
        <div className="event-page__guests-list">
          <h3 className="event-page__guests-list-tittle">
            Lista gości ({guests.length}{" "}
            {guests.length > 4 || guests.length < 2
              ? guests.length === 1
                ? "osoba"
                : "osób"
              : "osoby"}
            ):
          </h3>
          {guests.map((singleGuest) => (
            <Guest key={singleGuest.id} eventId={eventId} guest={singleGuest} />
          ))}
        </div>
      </div>
    </div>
  );
};
