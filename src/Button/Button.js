import React from "react";
import "./button.scss";

export const Button = ({icon, text}) => {
    return (
        <div className="button">
            <span className={`${icon} button__icon`} />
            {text}
        </div>
    );
};