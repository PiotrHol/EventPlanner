import React from "react";
import "./home.scss";
import { getAuth, signOut } from "firebase/auth";
import { Link, Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import {useUserStatus} from "../useUserStatus";
import logo from "../images/logo.png";

export const Home = () => {
    const routeHistory = useHistory();
    const {isLogIn, userId} = useUserStatus();
    let {path, url} = useRouteMatch();

    const handleSignOutBtn = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            routeHistory.push("/");
        });
    }

    return (

            <div className="homePage">
                <nav className="homePage--nav">
                    <div className="logBox--logo">
                        <img src={logo} alt="Event planner logo"/>
                        <h1>Event<br/>Planner</h1>
                    </div>
                    <ul className="homePage--nav__menu">
                        <Link to={`${url}/events`}><li>Wydarzenia</li></Link>
                        <Link to={`${url}/archives`}><li>Archiwum</li></Link>
                        <li onClick={handleSignOutBtn}>Wyloguj</li>
                    </ul>
                </nav>
                    <Switch>
                        <Route exact path={path}>
                            Strona powitalna
                        </Route>
                        <Route path={`${path}/events`}>
                            {isLogIn ? <p>Events component</p> : <Redirect to="/" />}
                        </Route>
                        <Route path={`${path}/archives`}>
                            {isLogIn ? <p>Archives component</p>: <Redirect to="/" />}
                        </Route>
                    </Switch>
            </div>

    );
}