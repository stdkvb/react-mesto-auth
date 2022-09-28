import React from "react";

function Authorization(props) {

    return(
        <form className="authorization-form">
            <h3 className="authorization-form__title">{props.title}</h3>
            <input className="authorization-form__input"
                   type="text"
                   placeholder="Email"
            />
            <input className="authorization-form__input"
                   type="text"
                   placeholder="Пароль"
            />
            <button className="authorization-form__submit-button" type="submit">{props.buttonText}</button>
            {props.children}
        </form>
    )
}

export default Authorization;