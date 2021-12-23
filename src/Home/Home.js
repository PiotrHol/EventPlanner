import React, {useState} from "react";
import "./home.scss";
import {getAuth, signOut} from "firebase/auth";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {useUserStatus} from "../useUserStatus";
import logo from "../images/navLogo.png";

export const Home = () => {
    const {userId} = useUserStatus();
    let {path, url} = useRouteMatch();
    const [showMenu, setShowMenu] = useState(false);

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
                    <span className="homePage--navIcon"></span>
                </label>
                <nav className="homePage--nav">
                    <ul>
                        <Link to={`${url}`}>
                            <li onClick={handleShowMenu}>Wydarzenia</li>
                        </Link>
                        <Link to={`${url}/archives`}>
                            <li onClick={handleShowMenu}>Archiwum</li>
                        </Link>
                        <li onClick={handleSignOutBtn}>Wyloguj</li>
                    </ul>
                </nav>
            </header>
            <main className="homePage--main">
                <Switch>
                    <Route exact path={path}>
                        {/*{isLogIn ? <p>Events component</p> : <Redirect to="/" />}*/}
                        <p className="temp">Events component</p>
                    </Route>
                    <Route path={`${path}/archives`}>
                        {/*{isLogIn ? <p>Archives component</p>: <Redirect to="/" />}*/}
                        <p>Archives component</p>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}