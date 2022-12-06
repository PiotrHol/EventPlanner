import React, { useState } from "react";
import "./addGuest.scss";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { doc, updateDoc, arrayUnion, getFirestore } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNewGuest } from "../redux/actions/eventsActions";
import { useForm } from "react-hook-form";

export const AddGuest = ({ setIsShow, eventId }) => {
  const [newGuestName, setNewGuestName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addGuestBtnHandler = async (formData) => {
    const dataToSet = {
      id: Date.now(),
      name: formData.guestName,
    };

    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      guests: arrayUnion(dataToSet),
    });

    dispatch(addNewGuest(eventId, dataToSet));

    setNewGuestName("");
    setIsShow(false);
  };

  return (
    <div className="add-guest">
      <h2 className="add-guest__title">Dodaj gościa</h2>
      <form onSubmit={handleSubmit(addGuestBtnHandler)}>
        <div className="add-guest__input-box">
          <input
            type="text"
            {...register("guestName", {
              required: true,
              maxLength: 50,
            })}
            className={classNames("add-guest__input", {
              "add-guest__input--error": errors.guestName,
            })}
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
