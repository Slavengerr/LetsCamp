import React, {Component} from "react";
import {auth, database} from "../../firebase";
import {Redirect} from "react-router-dom";
import {storage} from "../../firebase";
import "./PersonalArea.less";

let currentUser = null;

auth.onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user;
  }
}); 

class PersonalArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: currentUser
    }
  }

  submitForm = () => {
    
  }

  render() {
    return(
      <div className = "lk__wrapper">
        <div className = "lk__header">
          <span className = "lk__heading">Личный кабинет</span>
          <button className = "lk__leave" onClick = {() => {
            window.location = "/";
            auth.signOut().then(function() {
              console.log("Пользователь вышел из системы");
            }).catch(function(error) {
              console.log(error);
            });
          }}>Выйти</button>
        </div>
        <form className = "lk__request request">
          <span className = {"request"}>
              Название
            <input id = {"request__name"} type = "text" className = {"request__input"}></input>
          </span>
          <span className = {"request"}>
            Адрес
            <input id = {"request__address"} type = "text" className = {"request__input"}></input>
          </span>
          <span className = {"request"}>
            Контакты
            <input id = {"request__contacts"} type = "text" className = {"request__input"}></input>
          </span>
          <button type = "submit" onClick = {this.submitForm} className = {"request request__submit"}>Отправить заявку</button>
        </form>
      </div>
    )
  }
}

export default PersonalArea;