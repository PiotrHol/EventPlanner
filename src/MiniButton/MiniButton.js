import React, { useEffect, useRef, useState } from "react";
import "./miniButton.scss";
import classNames from "classnames";

export const MiniButton = ({ onClickFunction, icon, text, isActive }) => {
  const [hideText, setHideText] = useState(false);
  const [defaultButtonWidth, setDefaultButtonWidth] = useState("");
  const buttonRef = useRef();

  useEffect(() => {
    if (!defaultButtonWidth) {
      setDefaultButtonWidth(`${buttonRef.current.offsetWidth}px`);
      setHideText(true);
    }
  }, [defaultButtonWidth]);

  const buttonStyleToChange = {
    width: defaultButtonWidth,
    transition: "width .5s ease-out",
  };

  const buttonStyle = {
    width: "44px",
    transition: "width .5s ease-out",
  };

  return (
    <button
      className={classNames("mini-button", {
        "mini-button--inactive": !isActive,
      })}
      type="submit"
      ref={buttonRef}
      onClick={onClickFunction}
      style={!hideText ? buttonStyleToChange : buttonStyle}
      onMouseEnter={() => window.innerWidth >= 768 && setHideText(false)}
      onMouseLeave={() => window.innerWidth >= 768 && setHideText(true)}
      title={text}
    >
      <span className={`fas ${icon} mini-button__icon`} />
      {!hideText && <span className="mini-button__text">{text}</span>}
    </button>
  );
};
