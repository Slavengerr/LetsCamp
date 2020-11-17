import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./header.less";
import Logo from "../../../img/logo_sayt_khak.png";
import Menu from "../../../img/menu.svg";
import {auth} from "../../firebase";
import Sidebar from "../sidebar/Sidebar";



class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: null
    }
    auth.onAuthStateChanged((user => {
      if (user) {
        this.setState({user});
      }
    }))
  }

  render() {
    let user = this.state.user ? this.state.user : null;
    return(
      <div className = "header__links">
        <NavLink exact activeClassName = "header__logo_active" className = "header__link" to = "/"><img className = "header__logo" src = {Logo} /></NavLink>
        <NavLink exact activeClassName = "header__link_active" className = "header__link" to = "/">Главная</NavLink>
        <NavLink exact activeClassName = "header__link_active" className = "header__link" to = "/campings">Кемпинги</NavLink>
        {user ? <NavLink activeClassName = "header__link_active" className = "header__link" to = "/lk">Личный кабинет</NavLink> 
        :
        <NavLink activeClassName = "header__link_active" className = "header__link" to = "/auth">Авторизация</NavLink>}
        <Sidebar className = "header__menu" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
    )
  }
}

export default Header;