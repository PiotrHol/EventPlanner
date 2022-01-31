import React from "react";
import "./eventInfo.scss";
import { addDoc, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const EventInfo = ({user, data, isActive, eventsUpdate, archiveUpdate, url}) => {
    const dataBase = getFirestore();
    const dataToSet = {
        name: data.name,
        place: data.place,
        date: data.date,
        guests: data.guests,
        tasks: data.tasks
    }

    const setData = (stateSetter, data, id) => {
        stateSetter(prev => [...prev, {
            ...data,
            id
        }]);
    }

    const deleteData = (stateSetter, id) => {
        stateSetter(prev => prev.filter(event => event.id !== id));
    }

    const archiveBtnHandler = async () => {
        const archiveToSet = await addDoc(collection(dataBase, "users", user, "archive"), dataToSet);
        setData(archiveUpdate, dataToSet, archiveToSet.id);
        await deleteDoc(doc(dataBase, "users", user, "events", data.id));
        deleteData(eventsUpdate, data.id);
    }

    const returnBtnHandler = async () => {
        const eventToSet = await addDoc(collection(dataBase, "users", user, "events"), dataToSet);
        setData(eventsUpdate, dataToSet, eventToSet.id);
        await deleteDoc(doc(dataBase, "users", user, "archive", data.id));
        deleteData(archiveUpdate, data.id);
    }

    const trashBtnHandler = async () => {
        await deleteDoc(doc(dataBase, "users", user, "archive", data.id));
        deleteData(archiveUpdate, data.id);
    }

    return (
        <div className={classNames("homePage__event", {"homePage__archive": !isActive})}>
            <div className="homePage__event-name">{data.name}</div>
            <div className="homePage__event-place">Miejsce:<br/>{data.place}</div>
            <div className="homePage__event-date">Data:<br/>{data.date}</div>
            <div className="homePage__event-guests">Goście:<br/>{data.guests.length}</div>
            <div className="homePage__event-actions">
                {isActive ? (
                    <Link to={`${url}/${data.id}`}><span className="fas fa-edit homePage__event-edit-icon" title="Edytuj" /></Link>
                ) : (
                    <span className="fas fa-undo-alt" title="Cofnij z archiwum" onClick={returnBtnHandler} />
                )}
                
                <span className={classNames("fas", {"fa-archive": isActive, "fa-trash": !isActive})}
                title={isActive ? "Do archiwum" : "Usuń"} 
                onClick={isActive ? archiveBtnHandler : trashBtnHandler} />
            </div>
        </div>
    );
}