import React from "react";
import "./guest.scss";
import { doc, updateDoc, arrayRemove, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteGuest } from "../redux/actions/eventsActions";

export const Guest = ({ eventId, guest }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const deleteGuestBtnHandler = async () => {
    await updateDoc(doc(getFirestore(), "users", user, "events", eventId), {
      guests: arrayRemove(guest),
    });

    dispatch(deleteGuest(eventId, guest.id));
  };

  return (
    <div className="event-page__guest">
      <h3>{guest.name}</h3>
      <span
        className="fas fa-trash"
        title="Usuń"
        onClick={deleteGuestBtnHandler}
      />
    </div>
  );
};
