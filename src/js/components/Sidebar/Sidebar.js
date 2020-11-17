import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import "./Sidebar.less";

export default props => {
  return (
    <Menu right>
      <NavLink className="header__link" activeClassName = "bm-item_active" exact to="/">
        Главная
      </NavLink>
      <NavLink className="header__link" activeClassName = "bm-item_active" to="/campings">
        Кемпинги
      </NavLink>
      <NavLink className="header__link" activeClassName = "bm-item_active" to="/lk">
        Личный кабинет
      </NavLink>
    </Menu>
  );
};