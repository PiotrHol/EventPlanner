import React from "react";
import "./app.scss";
import appBase from "../firebase";
import {useUserStatus} from "../useUserStatus";
import {LogBox} from "../LogBox/LogBox";
import {Home} from "../Home/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const App = () => {
    const {isLogIn, userId} = useUserStatus();

    return (
        <BrowserRouter>
            <div className="appContainer">
                <Switch>
                    <Route exact path="/">
                        {isLogIn ? <Home user={userId} /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/login">
                        {!isLogIn ? <LogBox /> : <Redirect to="/" />}
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;