import React, {Component} from "react";
import {auth, database} from "../../firebase";
import {Route, NavLink} from "react-router-dom";
import SubmitRequest from "../SubmitRequest/SubmitRequest";
import "./auth.less";


class Auth extends Component {
  constructor(props) {
    super(props);
  }

  signIn = (e) => {
    e.preventDefault();
    let form = document.querySelector("#auth"),
        email = form.querySelector("#authEmail"),
        password = form.querySelector("#authPass"),
        throwError = form.querySelector("#auth_error");
    validateEmail(email.value) ? auth.signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
      let errorCode = error.code;
      console.log(errorCode);
      switch (errorCode) {
        case "auth/wrong-password":
          throwError.innerHTML = "Неверный пароль.";
          throwError.style.display = "block";
          break;
        case "auth/user-not-found":
          throwError.innerHTML = "Пользователь не найден.";
          throwError.style.display = "block";
          break;
        case "auth/invalid-email":
          throwError.innerHTML = "Неверный формат e-mail.";
          throwError.style.display = "block";
          break;
        default:
          throwError.innerHTML = "Неожиданная ошибка, попробуйте ещё раз.";
          throwError.style.display = "block";
          break;
      }
    }) : null;
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(String(email).toLowerCase());
      if (result) {
        return true;
      }
      else {
        throwError.innerHTML = "Вы ввели некорректный e-mail!";
        throwError.style.display = "block";
      }
    } 
  }

  signUp = (e) => {
    e.preventDefault();
    let form = document.querySelector("#auth"),
        email = form.querySelector("#authEmail"),
        password = form.querySelector("#authPass"),
        name = form.querySelector("#authName"),
        surname = form.querySelector("#authSurname"),
        ref = database.ref("users"),
        throwError = form.querySelector("#auth_error");
    (validateEmail(email.value) && validateName(name.value) && validateSurname(surname.value)) ? auth.createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
      let errorCode = error.code;
      switch(errorCode) {
        case "auth/invalid-email":
          throwError.innerHTML = "Вы ввели некорректный e-mail!";
          throwError.style.display = "block";
          break;
        case "auth/email-already-in-use":
          throwError.innerHTML = "Данный e-mail уже используется.";
          throwError.style.display = "block";
          break;
        default:
          throwError.innerHTML = "Неожиданная ошибка, попробуйте ещё раз.";
          throwError.style.display = "block";
          break;
      }
    }) : null;

    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(String(email).toLowerCase());
      if (result) {
        return true;
      }
      else {
        throwError.innerHTML = "Вы ввели некорректный e-mail!";
        throwError.style.display = "block";
      }
    }

    function validateName(name) {
      let result = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(name);
      if (result) {
        return true;
      }
      else {
        throwError.innerHTML = "Введите корректное имя!";
        throwError.style.display = "block";
      }
    }

    function validateSurname(name) {
      let result = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(name);
      if (result) {
        return true;
      }
      else {
        throwError.innerHTML = "Введите корректную фамилию!";
        throwError.style.display = "block";
      }
    }

    
    let request = {
      name: name.value,
      surname: surname.value,
      email: email.value
    };

    if (validateEmail(email.value) && validateName(name.value) && validateName(surname.value)) {
      SubmitRequest.create(request);
    }
  }

  render() {
    return(
      <>
        <Route exact path = "/auth/signup" render = {() => 
        <form id = "auth" className = "auth">
        <div className = "auth__slider slider">
          <NavLink exact to = "/auth" activeClassName = "slider__link_active" className = "slider__link"><button type = "button" className = "slider__signin">Вход</button></NavLink>
          <NavLink to = "/auth/signup" activeClassName = "slider__link_active" className = "slider__link"><button type = "button" className = "slider__signup">Регистрация</button></NavLink>
        </div>
        <h2 className = "auth__header">Регистрация</h2>
        <span className = "auth__text">Имя: <input id = "authName" className = "auth__input"></input></span>
        <span className = "auth__text">Фамилия: <input id = "authSurname" className = "auth__input"></input></span>
        <span className = "auth__text">Почта: <input id = "authEmail" className = "auth__input"></input></span>
        <span className = "auth__text">Пароль: <input id = "authPass" className = "auth__password auth__input"></input></span>
        <div id = "auth_error"></div>
        <button onClick = {this.signUp} type = "submit" className = "auth__button">Зарегистрироваться</button>
      </form>}></Route>
        <Route exact path = "/auth" render = {() => 
          <form id = "auth" className = "auth">
          <div className = "auth__slider slider">
            <NavLink to = "/auth/" activeClassName = "slider__link_active" className = "slider__link"><button type = "button" className = "slider__signin">Вход</button></NavLink>
            <NavLink to = "/auth/signup" activeClassName = "slider__link_active" className = "slider__link"><button type = "button" className = "slider__signup">Регистрация</button></NavLink>
          </div>
          <h2 className = "auth__header">Авторизация</h2>
          <span className = "auth__text">Почта: <input type = "email" id = "authEmail" className = "auth__input"></input></span>
          <span className = "auth__text">Пароль: <input id = "authPass" type = "password" className = "auth__password auth__input"></input></span>
          <div id = "auth_error"></div>
          <button onClick = {this.signIn} type = "submit" className = "auth__button">Войти</button>
        </form>
        }></Route>
      </>
    )
  }
}

export default Auth;