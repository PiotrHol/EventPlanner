import React from "react";
import "./home.scss";
import { getAuth, signOut } from "firebase/auth";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import {useUserStatus} from "../useUserStatus";
import logo from "../images/logo.png";

export const Home = () => {
    const {userId} = useUserStatus();
    let {path, url} = useRouteMatch();

    const handleSignOutBtn = () => {
        const auth = getAuth();
        signOut(auth).then();
    }

    return (
            <div className="homePage">
                <nav className="homePage--nav">
                    <div className="logBox--logo">
                        <img src={logo} alt="Event planner logo"/>
                        <h1>Event<br/>Planner</h1>
                    </div>
                    <ul className="homePage--nav__menu">
                        <Link to={`${url}`}><li>Wydarzenia</li></Link>
                        <Link to={`${url}/archives`}><li>Archiwum</li></Link>
                        <li onClick={handleSignOutBtn}>Wyloguj</li>
                    </ul>
                </nav>
                    <Switch>
                        <Route exact path={path}>
                            {/*{isLogIn ? <p>Events component</p> : <Redirect to="/" />}*/}
                            <p>Events component</p>
                        </Route>
                        <Route path={`${path}/archives`}>
                            {/*{isLogIn ? <p>Archives component</p>: <Redirect to="/" />}*/}
                            <p>Archives component</p>
                        </Route>
                    </Switch>
            </div>
    );
}