import React from "react";

function Register() {
  return (
    <>
    <form className="authorization-form">
        <h3 className="authorization-form__title">Регистрация</h3>
        <input className="authorization-form__input"
               type="text"
               placeholder="Email"
        />
        <input className="authorization-form__input"
               type="text"
               placeholder="Пароль"
        />
        <button className="authorization-form__submit-button" type="submit">Зарегистрироваться</button>
        <button className="authorization-form__login-button">Уже зарегистрированы? Войти</button>
    </form>    
    </>
  );
}

export default Register;