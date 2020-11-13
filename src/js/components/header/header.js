import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./header.less";
import Logo from "../../../img/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "header__links">
        <NavLink exact activeClassName = "header__logo_active" className = "header__link" to = "/"><img className = "header__logo" src = {Logo} /></NavLink>
        <NavLink exact activeClassName = "header__link_active" className = "header__link" to = "/">Главная</NavLink>
        <NavLink exact activeClassName = "header__link_active" className = "header__link" to = "/campings">Кемпинги</NavLink>
        <NavLink activeClassName = "header__link_active" className = "header__link" to = "/auth">Авторизация</NavLink>
      </div>
    )
  }
}

export default Header;