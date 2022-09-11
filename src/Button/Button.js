import React from "react";
import "./button.scss";
import { useState, useEffect, useRef } from "react";

export const Button = ({ onClickFunction, icon, text, isStatic }) => {
  const [firstButtonWidth, setFirstButtonWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState("fit-content");
  const [afterRenderButtonWidth, setAfterRenderButtonWidth] = useState(0);
  const [onHoverIntervalId, setOnHoverIntervalId] = useState(null);
  const [offHoverIntervalId, setOffHoverIntervalId] = useState(null);
  const [windowXDimension, setWindowXDimension] = useState(window.innerWidth);
  const buttonRef = useRef();

  useEffect(() => {
    if (!isStatic) {
      setFirstButtonWidth(buttonRef.current.offsetWidth);
      setButtonWidth(buttonRef.current.offsetHeight);
      setAfterRenderButtonWidth(buttonRef.current.offsetHeight);
      setWindowXDimension(window.innerWidth);

      return () => {
        clearInterval(onHoverIntervalId);
        clearInterval(offHoverIntervalId);
      };
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isStatic) {
      const handleResize = () => {
        setButtonWidth("fit-content");
        setFirstButtonWidth(buttonRef.current.offsetWidth);
        setButtonWidth(buttonRef.current.offsetHeight);
        setAfterRenderButtonWidth(buttonRef.current.offsetHeight);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowXDimension]);

  const onHoverFunction = () => {
    if (!isStatic) {
      if (window.innerWidth >= 768) {
        if (buttonRef.current.offsetWidth < firstButtonWidth) {
          clearInterval(offHoverIntervalId);
        }
        const intervalId = setInterval(() => {
          if (buttonRef.current.offsetWidth < firstButtonWidth) {
            setButtonWidth((prev) => prev + 2);
          } else {
            clearInterval(intervalId);
          }
        }, 5);
        setOnHoverIntervalId(intervalId);
      }
    }
  };

  const offHoverFunction = () => {
    if (!isStatic) {
      if (window.innerWidth >= 768) {
        if (buttonRef.current.offsetWidth > afterRenderButtonWidth) {
          clearInterval(onHoverIntervalId);
        }
        const intervalId = setInterval(() => {
          if (buttonRef.current.offsetWidth > afterRenderButtonWidth) {
            setButtonWidth((prev) => prev - 2);
          } else {
            clearInterval(intervalId);
          }
        }, 5);
        setOffHoverIntervalId(intervalId);
      }
    }
  };

  return (
    <div
      className="button"
      ref={buttonRef}
      style={{ width: buttonWidth }}
      onMouseEnter={onHoverFunction}
      onMouseLeave={offHoverFunction}
      onClick={onClickFunction}
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
    </div>
  );
};
