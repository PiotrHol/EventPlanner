import React, { useEffect, useState } from "react";
import "./logBox.scss";
import logo from "../images/logo.png";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export const LogBox = () => {
  const [newUserForm, setNewUserForm] = useState(false);
  const [loginInError, setLogInError] = useState(false);
  const [loginInErrorMessage, setLogInErrorMessage] = useState("");
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();

  useEffect(() => {
    if (loginInError) {
      setTimeout(() => setLogInError(false), 2000);
    }
  }, [loginInError]);

  const formChanger = (event) => {
    event.preventDefault();
    setNewUserForm((prev) => !prev);
    setLogInError(false);
    setLogInErrorMessage("");
    clearErrors();
    reset();
  };

  const handleLogBtn = ({ emailValue, passwordValue }) => {
    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        return await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
      } catch (e) {
        switch (e.code) {
          case "auth/user-not-found":
            setLogInErrorMessage("Nie posiadasz jeszcze konta. Załóż je!");
            break;
          case "auth/wrong-password":
            setLogInErrorMessage("Niepoprawne hasło!");
            break;
          default:
            setLogInErrorMessage("Niepoprawne dane!");
            break;
        }
        setLogInError(true);
      }
    });
  };

  const handleNewUserBtn = ({ emailValue, passwordValue }) => {
    setPersistence(auth, browserSessionPersistence).then(async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          getAuth(),
          emailValue,
          passwordValue
        );
        await setDoc(
          doc(getFirestore(), "users", `${userCredential.user.uid}`),
          {}
        );
      } catch (e) {
        switch (e.code) {
          case "auth/email-already-in-use":
            setLogInErrorMessage("Podany email jest już używany!");
            break;
          default:
            setLogInErrorMessage("Niepoprawne dane!");
            break;
        }
        setLogInError(true);
      }
    });
  };

  const onSubmit = (formData) => {
    if (newUserForm) {
      handleNewUserBtn(formData);
    } else {
      handleLogBtn(formData);
    }
  };

  return (
    <div className="log-box">
      <div className="log-box__content">
        <div className="log-box__bar" />
        <div className="log-box__logo">
          <img src={logo} alt="Event planner logo" />
          <h1>
            Event
            <br />
            Planner
          </h1>
        </div>
        <form className="log-box__form" onSubmit={handleSubmit(onSubmit)}>
          <p>Email:</p>
          <input
            type="email"
            {...register("emailValue", {
              required: "Podaj adres email!",
              pattern: {
                // eslint-disable-next-line
                value: /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/gm,
                message: "Podaj poprawny adres email!",
              },
            })}
            className={classNames({ "log-box__form-error": errors.emailValue })}
          />
          {errors.emailValue && (
            <p className="log-box__wrong-input">{errors.emailValue.message}</p>
          )}
          <p>Hasło:</p>
          <input
            type="password"
            {...register("passwordValue", {
              required: "Podaj hasło!",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
                message: `Hasło powinno mieć:
                min. 8 znaków, max. 16 znaków, 1 dużą literę,
                1 cyfrę i 1 znak specjalny`,
              },
            })}
            className={classNames({
              "log-box__form-error": errors.passwordValue,
            })}
          />
          {errors.passwordValue && (
            <p className="log-box__wrong-input">
              {errors.passwordValue.message}
            </p>
          )}
          {newUserForm && (
            <>
              <p>Potwierdź hasło:</p>
              <input
                type="password"
                {...register("repeatPasswordValue", {
                  required: "Podaj hasło jeszcze raz!",
                  validate: {
                    theSame: (value) =>
                      watch("passwordValue") === value ||
                      "Hasła muszą być takie same!",
                  },
                })}
                className={classNames({
                  "log-box__form-error": errors.repeatPasswordValue,
                })}
              />
              {errors.repeatPasswordValue && (
                <p className="log-box__wrong-input">
                  {errors.repeatPasswordValue.message}
                </p>
              )}
            </>
          )}
          {loginInError && (
            <p className="log-box__wrong-input">{loginInErrorMessage}</p>
          )}
          <div className="log-box__buttons">
            {newUserForm ? (
              <>
                <button type="submit">Utwórz</button>
                <button onClick={formChanger}>Wróć</button>
              </>
            ) : (
              <>
                <button type="submit">Zaloguj się</button>
                <button onClick={formChanger}>Załóż konto</button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
