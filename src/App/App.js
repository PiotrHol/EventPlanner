import React from "react";
import "./app.scss";
// eslint-disable-next-line
import appBase from "../firebase";
import {useUserStatus} from "../useUserStatus";
import {LogBox} from "../LogBox/LogBox";
import {Home} from "../Home/Home";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";

const App = () => {
    const {isLogIn} = useUserStatus();

    return (
        <HashRouter basename="/">
            <div className="app-container">
                <Switch>
                    <Route path="/home">
                        {isLogIn ? <Home /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/">
                        {!isLogIn ? <LogBox /> : <Redirect to="/home" />}
                    </Route>
                    <Route path="/*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;