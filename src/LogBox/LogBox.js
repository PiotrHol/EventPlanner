import React, {useState} from "react";
import "./logBox.scss";
import {validation} from "../validation";
import logo from "../images/logo.png"
import {getFirestore} from "firebase/firestore"
import {doc, setDoc} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence
} from "firebase/auth";
import {useHistory} from "react-router-dom";

export const LogBox = () => {
    const [newUserForm, setNewUserForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [wrongEmailMessage, setWrongEmailMessage] = useState("");
    const [wrongPasswordMessage, setWrongPasswordMessage] = useState("");
    const [wrongAgainPasswordMessage, setWrongAgainPasswordMessage] = useState("");
    const [loginInError, setLogInError] = useState(false);
    const [loginInErrorMessage, setLogInErrorMessage] = useState("");
    const auth = getAuth();
    const routeHistory = useHistory();

    const formChanger = event => {
        event.preventDefault();
        setNewUserForm(prev => !prev);
        setWrongEmailMessage("");
        setWrongPasswordMessage("");
        setWrongAgainPasswordMessage("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
    }

    const handleLogBtn = event => {
        event.preventDefault();
        setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    routeHistory.push("/");
                })
                .catch((error) => {
                    setLogInError(true);
                    setLogInErrorMessage("Niepoprawne dane");
                });
        });
    }

    const handleNewUserBtn = event => {
        event.preventDefault();
        setWrongEmailMessage("");
        setWrongPasswordMessage("");
        setWrongAgainPasswordMessage("");
        const {
            isValidate,
            errorLoginMessage,
            errorPasswordMessage,
            errorRepeatedPasswordMessage
        } = validation(email, password, repeatPassword);
        if (!isValidate) {
            setWrongEmailMessage(errorLoginMessage);
            setWrongPasswordMessage(errorPasswordMessage);
            setWrongAgainPasswordMessage(errorRepeatedPasswordMessage);
            return;
        }
        setPersistence(auth, browserSessionPersistence).then(() => {
            return createUserWithEmailAndPassword(getAuth(), email, password)
                .then((userCredential) => {
                    setDoc(doc(getFirestore(), "users", `${userCredential.user.uid}`), {
                        events: [],
                        archive: []
                    });
                    routeHistory.push("/");
                })
                .catch((error) => {
                    setLogInError(true);
                    setLogInErrorMessage("Wystąpił błąd. Sprubuj ponownie");
                });
        });
    }

    return (
        <div className="logBox">
            <div className="logBox--bar"></div>
            <div className="logBox--logo">
                <img src={logo} alt="Event planner logo"/>
                <h1>Event<br/>Planner</h1>
            </div>
            <form className="logBox--form">
                <p>Email:</p>
                <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                <p className="logBox--wrongInput">{wrongEmailMessage}</p>
                <p>Hasło:</p>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                <p className="logBox--wrongInput">{wrongPasswordMessage}</p>
                {newUserForm && (
                    <>
                        <p className="logBox--infoBox">Hasło powinno mieć:<br/>min. 8 znaków, 1 dużą literę,<br/>1 cyfrę
                            i 1 znak specjalny</p>
                        <p>Potwierdź hasło:</p>
                        <input type="password" value={repeatPassword}
                               onChange={event => setRepeatPassword(event.target.value)}/>
                        <p className="logBox--wrongInput">{wrongAgainPasswordMessage}</p>
                    </>
                )}
                {loginInError && <p className="logBox--wrongInput">{loginInErrorMessage}</p>}
                <div className="logBox--buttons">
                    {newUserForm ? (
                        <>
                            <button onClick={handleNewUserBtn}>Utwórz</button>
                            <button onClick={formChanger}>Wróć</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogBtn}>Zaloguj się</button>
                            <button onClick={formChanger}>Załóż konto</button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}