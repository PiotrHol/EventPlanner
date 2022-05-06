import React from "react";
import "./eventInfo.scss";
import { setDoc, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { moveToArchive, moveToEvents } from "../redux/actions/eventsActions";

export const EventInfo = ({user, data, isActive, eventsUpdate, archiveUpdate, url}) => {
    const dataBase = getFirestore();
    const dataToSet = {
        name: data.name,
        place: data.place,
        date: data.date,
        guests: data.guests,
        tasks: data.tasks
    }
    const dispatch = useDispatch();

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
        await setDoc(doc(dataBase, "users", user, "archive", data.id), dataToSet);
        await deleteDoc(doc(dataBase, "users", user, "events", data.id));
        dispatch(moveToArchive(data))
    }

    const returnBtnHandler = async () => {
        await setDoc(doc(dataBase, "users", user, "events", data.id), dataToSet);
        await deleteDoc(doc(dataBase, "users", user, "archive", data.id));
        dispatch(moveToEvents(data));
    }

    const trashBtnHandler = async () => {
        await deleteDoc(doc(dataBase, "users", user, "archive", data.id));
        deleteData(archiveUpdate, data.id);
    }

    return (
        <div className={classNames("home-page__event", {"home-page__archive": !isActive})}>
            <div className="home-page__event-name">{data.name}</div>
            <div className="home-page__event-place">Miejsce:<br/>{data.place}</div>
            <div className="home-page__event-date">Data:<br/>{data.date}</div>
            <div className="home-page__event-guests">Goście:<br/>{data.guests.length}</div>
            <div className="home-page__event-actions">
                {isActive ? (
                    <Link to={`${url}/${data.id}`}><span className="fas fa-edit home-page__event-edit-icon" title="Edytuj" /></Link>
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