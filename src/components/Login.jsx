import React from "react";

function Login() {
  return (
    <form className="authorization-form">
        <h3 className="authorization-form__title">Вход</h3>
        <input className="authorization-form__input"
               type="text"
               placeholder="Email"
        />
        <input className="authorization-form__input"
               type="text"
               placeholder="Пароль"
        />
        <button className="authorization-form__submit-button" type="submit">Войти</button>
    </form>
  );
}

export default Login;