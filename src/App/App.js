import React from "react";
import "./app.scss";
import appBase from "../firebase";
import {useUserStatus} from "../useUserStatus";
import {LogBox} from "../LogBox/LogBox";
import {Home} from "../Home/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const App = () => {
    const {isLogIn} = useUserStatus();

    return (
        <BrowserRouter>
            <div className="appContainer">
                <Switch>
                    <Route path="/home">
                        {isLogIn ? <Home /> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/">
                        {!isLogIn ? <LogBox /> : <Redirect to="/home" />}
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;