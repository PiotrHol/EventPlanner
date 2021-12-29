import React from "react";
import "./eventInfo.scss";
import { addDoc, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";

export const EventInfo = ({user, data, isActive, update}) => {
    const dataBase = getFirestore();
    const dataToSet = {
        name: data.name,
        place: data.place,
        date: data.date,
        guests: data.guests,
        tasks: data.tasks
    }

    const editBtnHandler = () => {
        
    }

    const archiveBtnHandler = () => {
        addDoc(collection(dataBase, "users", user, "archive"), dataToSet).then(() => {
            deleteDoc(doc(dataBase, "users", user, "events", data.id)).then(() => {
                update(user);
            })
        });
    }

    const returnBtnHandler = () => {
        addDoc(collection(dataBase, "users", user, "events"), dataToSet).then(() => {
            deleteDoc(doc(dataBase, "users", user, "archive", data.id)).then(() => {
                update(user);
            })
        })
    }

    const trashBtnHandler = () => {
        deleteDoc(doc(dataBase, "users", user, "archive", data.id)).then(() => {
            update(user);
        })
    }

    return (
        <div className={`homePage--event ${!isActive && `homePage--archive`}`}>
            <div className="homePage--event__name">{data.name}</div>
            <div className="homePage--event__place">Miejsce:<br/>{data.place}</div>
            <div className="homePage--event__date">Data:<br/>{data.date}</div>
            <div className="homePage--event__guests">Goście:<br/>{data.guests.length}</div>
            <div className="homePage--event__actions">
                <span className={`fas fa-${isActive ? `edit` : `undo-alt`}`} onClick={isActive ? editBtnHandler : returnBtnHandler} />
                <span className={`fas fa-${isActive ? `archive` : `trash`}`} onClick={isActive ? archiveBtnHandler : trashBtnHandler} />
            </div>
        </div>
    );
}