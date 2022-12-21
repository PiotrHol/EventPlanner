import React from "react";
import "./button.scss";
import { useState, useEffect, useRef } from "react";

export const Button = ({ onClickFunction, icon, text, isStatic }) => {
  const [hideText, setHideText] = useState(false);
  const [buttonWidth, setButtonWidth] = useState("");
  const [defaultButtonWidth, setDefaultButtonWidth] = useState(0);
  const buttonRef = useRef();

  useEffect(() => {
    setDefaultButtonWidth(buttonRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    if (!buttonWidth && !isStatic) {
      setButtonWidth(`${buttonRef.current.offsetWidth}px`);
      setHideText(true);
    }
    // eslint-disable-next-line
  }, [buttonWidth]);

  const buttonStyleToChange = {
    width: buttonWidth,
    transition: "width .5s ease-out",
  };

  const buttonStyle = {
    width: `${defaultButtonWidth}px`,
    transition: "width .5s ease-out",
  };

  return (
    <button
      className="button"
      ref={buttonRef}
      style={!hideText ? buttonStyleToChange : buttonStyle}
      onMouseEnter={() =>
        window.innerWidth >= 768 && !isStatic && setHideText(false)
      }
      onMouseLeave={() =>
        window.innerWidth >= 768 && !isStatic && setHideText(true)
      }
      onClick={onClickFunction && onClickFunction}
      type="submit"
    >
      <span
        className={
          isStatic
            ? `${icon} button__icon button__icon--static`
            : `${icon} button__icon`
        }
      />
      <span
        className={
          isStatic ? "button__text button__text--static" : "button__text"
        }
      >
        {text}
      </span>
    </button>
  );
};
