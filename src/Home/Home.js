import React, { useEffect, useState } from "react";
import "./home.scss";
import { getAuth, signOut } from "firebase/auth";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { useUserStatus } from "../useUserStatus";
import logo from "../images/navLogo.png";
import { Events } from "../Events/Events";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../redux/reducers/eventsSlice";
import { useSelector } from "react-redux";

export const Home = () => {
  const { userId } = useUserStatus();
  let { path, url } = useRouteMatch();
  const [showMenu, setShowMenu] = useState(false);
  const [eventsListTemp, setEventsListTemp] = useState([]);
  const [archiveListTemp, setArchiveListTemp] = useState([]);
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events);
  const archiveList = useSelector((state) => state.archive);

  useEffect(() => {
    if (userId) {
      async function fetchData() {
        const dataBase = getFirestore();
        setEventsListTemp([]);
        setArchiveListTemp([]);

        const allEvents = await getDocs(
          collection(dataBase, "users", userId, "events")
        );
        allEvents.forEach((singleEvent) => {
          setEventsListTemp((prev) => [
            ...prev,
            {
              ...singleEvent.data(),
              id: singleEvent.id,
              tasks: singleEvent.data().tasks.sort((a, b) => a.id - b.id),
            },
          ]);
        });

        const allArchive = await getDocs(
          collection(dataBase, "users", userId, "archive")
        );
        allArchive.forEach((singleEvent) => {
          setArchiveListTemp((prev) => [
            ...prev,
            {
              ...singleEvent.data(),
              id: singleEvent.id,
              tasks: singleEvent.data().tasks.sort((a, b) => a.id - b.id),
            },
          ]);
        });
      }

      fetchData();
      dispatch(fetchEvents);
    }
    // eslint-disable-next-line
  }, [userId]);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="home-page">
      <header className="home-page__header">
        <div className="home-page__logo">
          <img src={logo} alt="Event planner logo" />
          <h1>
            Event
            <br />
            Planner
          </h1>
        </div>
        <input
          className="home-page__menu-btn"
          id="home-page__menu-btn"
          type="checkbox"
          checked={showMenu}
          onChange={handleShowMenu}
        />
        <label className="home-page__menu-icon" htmlFor="home-page__menu-btn">
          <span className="home-page__nav-icon" />
        </label>
        <nav className="home-page__nav">
          <ul>
            <Link to={`${url}/events`}>
              <li onClick={handleShowMenu}>Wydarzenia</li>
            </Link>
            <Link to={`${url}/archive`}>
              <li onClick={handleShowMenu}>Archiwum</li>
            </Link>
            <li onClick={() => signOut(getAuth())}>Wyloguj</li>
          </ul>
        </nav>
      </header>
      <main className="home-page__main">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/events`} />
          </Route>
          <Route path={`${path}/events`}>
            <Events
              user={userId}
              events={eventsList}
              isArchive={false}
              updateEvents={(data) => setEventsListTemp(data)}
              updateArchive={(data) => setArchiveListTemp(data)}
            />
          </Route>
          <Route path={`${path}/archive`}>
            <Events
              user={userId}
              events={archiveList}
              isArchive={true}
              updateEvents={(data) => setEventsListTemp(data)}
              updateArchive={(data) => setArchiveListTemp(data)}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
