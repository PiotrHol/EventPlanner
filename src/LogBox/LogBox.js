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

    const formChanger = event => {
        event.preventDefault();
        setNewUserForm(prev => !prev);
        setWrongEmailMessage("");
        setWrongPasswordMessage("");
        setWrongAgainPasswordMessage("");
        setLogInError(false);
        setLogInErrorMessage("");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
    }

    const handleLogBtn = event => {
        event.preventDefault();
        setPersistence(auth, browserSessionPersistence).then(async () => {
            try {
                return await signInWithEmailAndPassword(auth, email, password);
            } catch {
                setLogInError(true);
                setLogInErrorMessage("Niepoprawne dane");
            }
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
        setPersistence(auth, browserSessionPersistence).then(async () => {
            try {
                const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
                await setDoc(doc(getFirestore(), "users", `${userCredential.user.uid}`), {});
            }
            catch {
                setLogInError(true);
                setLogInErrorMessage("Wyst??pi?? b????d. Sprubuj ponownie");
            }
        });
    }

    return (
        <div className="log-box">
            <div className="log-box__content">
                <div className="log-box__bar"/>
                <div className="log-box__logo">
                    <img src={logo} alt="Event planner logo"/>
                    <h1>Event<br/>Planner</h1>
                </div>
                <form className="log-box__form">
                    <p>Email:</p>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <p className="log-box__wrong-input">{wrongEmailMessage}</p>
                    <p>Has??o:</p>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <p className="log-box__wrong-input">{wrongPasswordMessage}</p>
                    {newUserForm && (
                        <>
                            <p className="log-box__info-box">Has??o powinno mie??:<br/>min. 8 znak??w, 1 du???? liter??,<br/>1 cyfr??
                                i 1 znak specjalny</p>
                            <p>Potwierd?? has??o:</p>
                            <input type="password" value={repeatPassword}
                                onChange={event => setRepeatPassword(event.target.value)}/>
                            <p className="log-box__wrong-input">{wrongAgainPasswordMessage}</p>
                        </>
                    )}
                    {loginInError && <p className="log-box__wrong-input">{loginInErrorMessage}</p>}
                    <div className="log-box__buttons">
                        {newUserForm ? (
                            <>
                                <button onClick={handleNewUserBtn}>Utw??rz</button>
                                <button onClick={formChanger}>Wr????</button>
                            </>
                        ) : (
                            <>
                                <button onClick={handleLogBtn}>Zaloguj si??</button>
                                <button onClick={formChanger}>Za?????? konto</button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}