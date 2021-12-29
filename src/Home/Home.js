import React, {useEffect, useState} from "react";
import "./home.scss";
import {getAuth, signOut} from "firebase/auth";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {useUserStatus} from "../useUserStatus";
import logo from "../images/navLogo.png";
import {Events} from "../Events/Events";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const Home = () => {
    const {userId} = useUserStatus();
    let {path, url} = useRouteMatch();
    const [showMenu, setShowMenu] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    const [archiveList, setArchiveList] = useState([]);

    useEffect(() => {
        getDataFromBase(userId);
    }, [userId]);

    const getDataFromBase = id => {
        if (id !== "") {
            const dataBase = getFirestore();
            setEventsList([]);
            setArchiveList([]);
            getDocs(collection(dataBase, "users", id, "events")).then(allEvents => {
                allEvents.forEach(singleEvent => {
                    setEventsList(prev => [...prev, {
                        ...singleEvent.data(),
                        id: singleEvent.id
                    }]);
                });
            });
            getDocs(collection(dataBase, "users", id, "archive")).then(allEvents => {
                allEvents.forEach(singleEvent => {
                    setArchiveList(prev => [...prev, {
                        ...singleEvent.data(),
                        id: singleEvent.id
                    }]);
                })
            })
        }
    }

    const handleSignOutBtn = () => {
        const auth = getAuth();
        signOut(auth).then();
    }

    const handleShowMenu = () => {
        setShowMenu(prev => !prev);
    }

    return (
        <div className="homePage">
            <header className="homePage--header">
                <div className="homePage--logo">
                    <img src={logo} alt="Event planner logo"/>
                    <h1>Event<br/>Planner</h1>
                </div>
                <input className="homePage--menuBtn" id="homePage--menuBtn" type="checkbox" checked={showMenu} onChange={handleShowMenu}/>
                <label className="homePage--menuIcon" htmlFor="homePage--menuBtn">
                    <span className="homePage--navIcon"/>
                </label>
                <nav className="homePage--nav">
                    <ul>
                        <Link to={`${url}`}>
                            <li onClick={handleShowMenu}>Wydarzenia</li>
                        </Link>
                        <Link to={`${url}/archive`}>
                            <li onClick={handleShowMenu}>Archiwum</li>
                        </Link>
                        <li onClick={handleSignOutBtn}>Wyloguj</li>
                    </ul>
                </nav>
            </header>
            <main className="homePage--main">
                <Switch>
                    <Route exact path={path}>
                        <Events user={userId} events={eventsList} isArchive={false} updateData={getDataFromBase}/>
                    </Route>
                    <Route path={`${path}/archive`}>
                        <Events user={userId} events={archiveList} isArchive={true} updateData={getDataFromBase}/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}