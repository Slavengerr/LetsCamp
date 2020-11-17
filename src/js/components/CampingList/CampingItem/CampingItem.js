import React, {Component} from "react";
import ReactStars from "react-rating-stars-component";
import {NavLink, Route} from "react-router-dom";
import "./CampingItem.less";

class CampingItem extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div className = "camping__wrapper">
          <div className = "camping__info">
            <h1 className = "camping__header">{this.props.name}</h1>
            <span className = "camping__text">{this.props.place}</span>
            <h3 className = "camping__price">{this.props.price} в сутки</h3>
            <ReactStars count = {5} value = {+this.props.rate} isHalf={true} size={24} edit = {false} activeColor="#8DC557"/>
            <NavLink to = {{
              pathname: `/campings/${this.props.id}`,
              aboutProps: this.props
            }} className = "camping__button">Подробнее</NavLink>
          </div>
          <div className = "camping__image">
          <img className = "campimg" src={require("../../../../img/" + this.props.id + ".jpg").default} alt="product" />
          </div>
        </div>
    )
  }
}

export default CampingItem;