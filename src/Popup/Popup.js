import React, { useEffect, useState } from "react";
import "./popup.scss";

export const Popup = ({isShow, setIsShow, children}) => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(isShow);
    }, [isShow])

    const onClickHandler = () => {
        setShowPopup(false);
        setIsShow(false);
    }

    if (showPopup) {
        return (
            <div className="popup">
                <div className="popup__content">
                    <div className="popup__close">
                        <span className="fas fa-times popup__close-btn" onClick={onClickHandler} />
                    </div>
                    {children}
                </div>
            </div>
        );
    } else {
        return null;
    }
}