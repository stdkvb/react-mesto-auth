import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      <p className="header__title">{props.loggedIn ? "email" : "Регистрация"}</p>
    </header>
  );
}

export default Header;
