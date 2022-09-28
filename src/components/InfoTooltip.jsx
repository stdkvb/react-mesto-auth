import React from "react";
import successIcon from "../images/success.svg";
import failIcon from "../images/fail.svg";

function InfoToolTip() {

  return (
    <div className="popup">
      <div className="popup__container popup__container_no-form">
        <button
          className="popup__close-button"
          type="button"
        ></button>
        <img className="popup__icon" src={successIcon} alt="успешная регистрация"/>
        <p className="popup__notification">Вы успешно зарегистрировались!</p>
      </div>
    </div>    
  );
}

export default InfoToolTip;
