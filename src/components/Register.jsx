import React from "react";
import Authrization from "./Authorization";

function Register() {
  return (
    <Authrization title="Регистрация" buttonText="Зарегистрироваться">
      <button className="authorization-form__login-button">Уже зарегистрированы? Войти</button>
    </Authrization>
  );
}

export default Register;