import React, {Component} from "react";
import example1 from "./../../../img/image3.png";
import "./main.less";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <body className = "bodyMain">
        <main className = "main">
          <div className = "main__info info">
            <h1 className = "info__theme">Lets Camp</h1>
            <button className = "info__button">Начать тур</button>
          </div>
          <div className = "main__about about">
            <div className = "about__wrapper">
              <img className = "about__image" src = {example1}></img>
              <div className =  "wrapper__text text">
                <h2 className = "text__header">О нас</h2>
                <br></br>
                <h3 className = "text__info">Здесь какой-то текст.<br />Здесь какой-то текст.<br />Здесь какой-то текст.<br />Здесь какой-то текст.<br />Здесь какой-то текст.<br /></h3>
              </div>
            </div>
            <div className = "about__wrapper">
              <img className = "about__image" src = {example1}></img>
              <div className =  "wrapper__text text">
                <h2 className = "text__header">О нас</h2>
                <br></br>
                <h3 className = "text__info">Здесь какой-то текст.<br />Здесь какой-то текст.<br />Здесь какой-то текст.<br />Здесь какой-то текст.<br />Здесь какой-то текст.<br /></h3>
              </div>
            </div>
          </div>
        </main>
      </body>
    )
  }
}

export default Main;