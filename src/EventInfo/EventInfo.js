import React from "react";
import "./eventInfo.scss";
import { addDoc, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

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

    const archiveBtnHandler = () => {
        addDoc(collection(dataBase, "users", user, "archive"), dataToSet).then(archiveToSet => {
            setData(archiveUpdate, dataToSet, archiveToSet.id);

            deleteDoc(doc(dataBase, "users", user, "events", data.id)).then(() => {
                deleteData(eventsUpdate, data.id);
            })
        });
    }

    const returnBtnHandler = () => {
        addDoc(collection(dataBase, "users", user, "events"), dataToSet).then(eventToSet => {
            setData(eventsUpdate, dataToSet, eventToSet.id);

            deleteDoc(doc(dataBase, "users", user, "archive", data.id)).then(() => {
                deleteData(archiveUpdate, data.id);
            })
        })
    }

    const trashBtnHandler = () => {
        deleteDoc(doc(dataBase, "users", user, "archive", data.id)).then(() => {
            deleteData(archiveUpdate, data.id);
        })
    }

    return (
        <div className={`homePage--event ${!isActive && `homePage--archive`}`}>
            <div className="homePage--event__name">{data.name}</div>
            <div className="homePage--event__place">Miejsce:<br/>{data.place}</div>
            <div className="homePage--event__date">Data:<br/>{data.date}</div>
            <div className="homePage--event__guests">Goście:<br/>{data.guests.length}</div>
            <div className="homePage--event__actions">
                {isActive ? (
                    <Link to={`${url}/${data.id}`}><span className="fas fa-edit homePage--event__editIcon" title="Edytuj" /></Link>
                ) : (
                    <span className="fas fa-undo-alt" title="Cofnij z archiwum" onClick={returnBtnHandler} />
                )}
                
                <span className={`fas fa-${isActive ? `archive` : `trash`}`}
                title={isActive ? "Do archiwum" : "Usuń"} 
                onClick={isActive ? archiveBtnHandler : trashBtnHandler} />
            </div>
        </div>
    );
}