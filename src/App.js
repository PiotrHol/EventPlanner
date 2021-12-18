import React, {useEffect, useState} from "react";
import "./scss/app.scss";
import appBase from "./firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {LogBox} from "./LogBox";
import {Home} from "./Home";

const App = () => {
    const [isUser, setIsUser] = useState(false);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setUserId(user.uid);
                setIsUser(true);
            } else {
                setUserId("");
                setIsUser(false);
            }
        });
    }, [userId]);

    return (
        <div className="appContainer">
            {!isUser ? <LogBox setUser={(user) => setUserId(user)}/> : <Home user={userId} removeUser={() => setUserId("")}/>}
        </div>
    );
}

export default App;