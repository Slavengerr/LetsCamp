import React, {Component} from "react";
import ReactStars from "react-rating-stars-component";
import "./CampingFull.less";

class CampingFull extends Component {
  constructor(props) {
    super(props);
  }

  renderBoolean = (smth) => {
    if (smth) {
      return "Да";
    }
    else {
      return "Нет";
    }
  }

  render() {
    let propses = this.props.location.aboutProps;
    console.log(propses);
    return (
      <div className = "campfull__wrapper">
        <div className = "campfull__rate">
          <ReactStars count = {5} value = {+propses.rate} isHalf={true} size={24} edit = {false} activeColor="#8DC557"/>
        </div>
        <h1 className = "campfull__header">
          {propses.name}
        </h1>
        <h2 className= "campfull__place">
          {propses.place}
        </h2>
        <div className = "campfull_info campInfo">
          <img className = "campInfo__image" src={require("../../../../../img/" + propses.id + ".jpg").default} alt="product" />
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Оборудовано для людей с ограниченными способностями: {this.renderBoolean(propses.disabilities)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Оборудовано электричеством: {this.renderBoolean(propses.electricity)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Присутствует ли еда: {this.renderBoolean(propses.food)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Есть ли питьевая вода: {this.renderBoolean(propses.isWater)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Можно ли приехать с детьми: {this.renderBoolean(propses.kids)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Есть ли зона для некурящих: {this.renderBoolean(propses.nsz)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Есть ли парковочные места: {this.renderBoolean(propses.parkSpace)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Есть ли спальные места: {this.renderBoolean(propses.sleep)}</span>
        </div>
        <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Есть ли зона Wi-Fi: {this.renderBoolean(propses.wifi)}</span>
        </div>
        {propses.link ? <div className = "campfull_info campInfo">
          <span className = "campInfo__text">Ссылка на кемпинг: <a href = {propses.link}>{propses.link}</a></span>
        </div> : null}
        <div className = "campfull__reviews reviews">
          {propses.name1 ? 
          <div className = "reviews__review review">
            <h2 className = "review__author">{propses.name1}</h2>
            <h3 className = "review__text">{propses.review1}</h3>
          </div> : null}
        </div>
        <div className = "campfull__reviews reviews">
          {propses.name2 ? 
          <div className = "reviews__review review">
            <h2 className = "review__author">{propses.name2}</h2>
            <h3 className = "review__text">{propses.review2}</h3>
          </div> : null}
        </div>
        <div className = "campfull__reviews reviews">
          {propses.name3 ? 
          <div className = "reviews__review review">
            <h2 className = "review__author">{propses.name3}</h2>
            <h3 className = "review__text">{propses.review3}</h3>
          </div> : null}
        </div>
        <div className = "campfull_info campInfo ">
          <span className = "campInfo__text campInfo__price">Цена в сутки: {propses.price}</span>
        </div>
      </div>
    )
  }
}

export default CampingFull;