import React, {Component} from "react";
import {auth, database} from "../../firebase";
import "./CampingList.less";
import CampingItem from "./CampingItem/CampingItem";

class CampingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      wifi: false,
      parkSpace: false,
      animals: false,
      electricity: false,
      food: false,
      sleep: false,
      water: false,
      smoke: false,
      kids: false,
      disabilities: false,
      loading: true
    }
  }

  async componentDidMount() {
    let ref = database.ref("/currentRequests");

    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        this.setState({loading: false})
      }
    })

    this.setState({ 
      user: auth.currentUser,
      isRegionSelected: false
   });
    try {
      ref.on("value", snapshot => {
        let items = [];
        snapshot.forEach((snap) => {
          items.push(snap.val());
        });
        this.setState({
          items: items
        })
      }); 
    } 
    catch (error) {
      this.setState({ readError: error.message });
    }
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  validateRegion = () => {
    let input = document.getElementById("input-select").value;
    this.setState({
      isRegionSelected: true,
      selectedRegion: input
    })
    return input;
  }

  validateWiFi = () => {
    let wifi = document.getElementById("filter__wifi").checked;;
    this.setState({
      wifi
    })
  }

  validateParkingSpace = () => {
    let parkSpace = document.getElementById("filter__park").checked;
    this.setState({
      parkSpace
    })
  }

  validateAnimals = () => {
    let animals = document.getElementById("filter__animals").checked;
    this.setState({
      animals
    })
  }

  validateElectricity = () => {
    let electricity = document.getElementById("filter__electricity").checked;
    this.setState({
      electricity
    })
  }

  validateFood = () => {
    let food = document.getElementById("filter__food").checked;
    this.setState({
      food
    })
  }

  validateSleep = () => {
    let sleep = document.getElementById("filter__sleep").checked;
    this.setState({
      sleep
    })
  }

  validateWater = () => {
    let water = document.getElementById("filter__water").checked;
    this.setState({
      water
    })
  }

  validateSmoke = () => {
    let smoke = document.getElementById("filter__nonsmoke").checked;
    this.setState({
      smoke
    })
  }

  validateKids = () => {
    let kids = document.getElementById("filter__kids").checked;
    this.setState({
      kids
    })
  }

  validateDisabilities = () => {
    let disabilities = document.getElementById("filter__disabilities").checked;
    this.setState({
      disabilities
    })
  }

  render() {
    let nameInput = document.getElementById("filter__name");
    let itemsList = this.state.items ? this.state.items.map((curr, index) => {
      let isGoes = true;
      if (this.state.isRegionSelected) {
        if (!(curr.region == this.state.selectedRegion)) {
          isGoes = false;
        }
      }
    if (typeof(curr.WiFi) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.parkSpace) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.animals) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.electricity) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.food) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.sleepSpace) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.isWater) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.nonsmokeZone) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.kids) == "undefined") {
      isGoes = false;
    }

    if (typeof(curr.peopleDisabilities) == "undefined") {
      isGoes = false;
    }
    
    if (this.state.wifi && isGoes) {
      if (!JSON.parse(curr.WiFi)) {
        isGoes = false;
      }
    }

    if (this.state.parkSpace && isGoes) {
      if (!JSON.parse(curr.parkSpace)) {
        isGoes = false;
      }
    }

    if (this.state.animals && isGoes) {
      if (!JSON.parse(curr.animals)) {
        isGoes = false;
      }
    }  

    if (this.state.electricity && isGoes) {
      if (!JSON.parse(curr.electricity)) {
        isGoes = false;
      }
    } 

    if (this.state.food && isGoes) {
      if (!JSON.parse(curr.food)) {
        isGoes = false;
      }
    } 

    if (this.state.sleep && isGoes) {
      if (!JSON.parse(curr.sleepSpace)) {
        isGoes = false;
      }
    } 

    if (this.state.water && isGoes) {
      if (!JSON.parse(curr.isWater)) {
        isGoes = false;
      }
    } 

    if (this.state.smoke && isGoes) {
      if (!JSON.parse(curr.nonsmokeZone)) {
        isGoes = false;
      }
    } 

    if (this.state.kids && isGoes) {
      if (!JSON.parse(curr.kids)) {
        isGoes = false;
      }
    } 

    if (this.state.disabilities && isGoes) {
      if (!JSON.parse(curr.peopleDisabilities)) {
        isGoes = false;
      }
    } 

      return (isGoes && curr.name) ? <CampingItem id = {curr.id} link = {curr.link} name1 = {curr.name1} name2 = {curr.name2} name3 = {curr.name3} review1 = {curr.review1} review2 = {curr.review2} review3 = {curr.review3} wifi = {curr.WiFi} animals = {curr.animals} electricity= {curr.electricity} food = {curr.food} isWater = {curr.isWater} kids = {curr.kids} nsz = {curr.nonsmokeZone} parkSpace = {curr.parkSpace} disabilities = {curr.peopleDisabilities} place = {curr.place} price = {curr.pricePerDay} sleep = {curr.sleepSpace} name = {curr.name} key = {index} id = {curr.number} place = {curr.place} price = {curr.pricePerDay} rate = {curr.rate}/> : null;
    }) : null;

    if (this.state.loading) {
      return null;
    }

    return (
      <div className = "camplist">
        <div className = "camplist__filter filter">
          <span className = {"filter__text"}>
          Регион
          <select onChange = {this.validateRegion} name="region" className = {"filter__select"} id="input-select">
          	<option value="Адыгея">Республика Адыгея</option>
          	<option value="Алтай">Республика Алтай </option>
          	<option value="Башкортостан">Республика Башкортостан </option>
          	<option value="Бурятия">Республика Бурятия </option>
          	<option value="Дагестан">Республика Дагестан </option>
          	<option value="Ингушетия">Республика Ингушетия </option>
          	<option value="Кабардино-Балкария">Кабардино-Балкарская Республика</option>
          	<option value="Калмыкия">Республика Калмыкия </option>
          	<option value="Карачаево-Черкессия">Карачаево-Черкесская Республика</option>
          	<option value="Карелия">Республика Карелия </option>
          	<option value="Коми">Республика Коми </option>
          	<option value="Марий Эл">Республика Марий Эл </option>
          	<option value="Мордовия">Республика Мордовия</option>
          	<option value="Саха (Якутия)">Республика Саха (Якутия) </option>
          	<option value="Северная Осетия - Алания">Республика Северная Осетия - Алания </option>
          	<option value="Татарстан">Республика Татарстан</option>
          	<option value="Тыва">Республика Тыва </option>
          	<option value="Удмуртская">Удмуртская Республика </option>
          	<option value="Хакасия">Республика Хакасия </option>
          	<option value="Чеченская">Чеченская Республика</option>
          	<option value="Чувашская Республика">Чувашская Республика</option>
          	<option value="Алтайский край">Алтайский край</option>
          	<option value="Забайкальский край">Забайкальский край</option>
          	<option value="Камчатский край">Камчатский край</option>
          	<option value="Краснодарский край">Краснодарский край</option>
          	<option value="Красноярский край">Красноярский край</option>
          	<option value="Пермский край">Пермский край</option>
          	<option value="Приморский край">Приморский край</option>
          	<option value="Ставропольский край">Ставропольский край</option>
          	<option value="Хабаровский край">Хабаровский край</option>
          	<option value="Амурская область">Амурская область</option>
          	<option value="Архангельская область">Архангельская область</option>
          	<option value="Астраханская область">Астраханская область</option>
          	<option value="Белгородская область">Белгородская область</option>
          	<option value="Брянская область">Брянская область </option>
          	<option value="Владимирская область">Владимирская область </option>
          	<option value="Волгоградская область">Волгоградская область </option>
          	<option value="Вологодская область">Вологодская область </option>
          	<option value="Воронежская область">Воронежская область </option>
          	<option value="Ивановская область">Ивановская область </option>
          	<option value="Иркутская область">Иркутская область </option>
          	<option value="Калининградская область">Калининградская область</option>
          	<option value="Калужская область">Калужская область </option>
          	<option value="Кемеровская область">Кемеровская область </option>
          	<option value="Кировская область">Кировская область </option>
          	<option value="Костромская область">Костромская область </option>
          	<option value="Курганская область">Курганская область </option>
          	<option value="Курская область">Курская область </option>
          	<option value="Ленинградская область">Ленинградская область </option>
          	<option value="Липецкая область">Липецкая область </option>
          	<option value="Магаданская область">Магаданская область</option>
          	<option value="Московская область">Московская область </option>
          	<option value="Мурманская область">Мурманская область </option>
          	<option value="Нижегородская область">Нижегородская область </option>
          	<option value="Новгородская область">Новгородская область </option>
          	<option value="Новосибирская область">Новосибирская область </option>
          	<option value="Омская область">Омская область</option>
          	<option value="Оренбургская область">Оренбургская область </option>
          	<option value="Орловская область">Орловская область </option>
          	<option value="Пензенская область">Пензенская область </option>
          	<option value="Псковская область">Псковская область </option>
          	<option value="Ростовская область">Ростовская область </option>
          	<option value="Рязанская область">Рязанская область </option>
          	<option value="Самарская область">Самарская область </option>
          	<option value="Саратовская область">Саратовская область </option>
          	<option value="Сахалинская область">Сахалинская область </option>
          	<option value="Свердловская область">Свердловская область </option>
          	<option value="Смоленская область">Смоленская область </option>
          	<option value="Тамбовская область">Тамбовская область </option>
          	<option value="Тверская область">Тверская область </option>
          	<option value="Томская область">Томская область </option>
          	<option value="Тульская область">Тульская область</option>
          	<option value="Тюменская область">Тюменская область </option>
          	<option value="Ульяновская область">Ульяновская область </option>
          	<option value="Челябинская область">Челябинская область </option>
          	<option value="Ярославская область">Ярославская область</option>
          	<option value="Москва">Москва</option>
          	<option value="Санкт-Петербург">Санкт-Петербург</option>
          	<option value="Еврейская АО">Еврейская АО</option>
          	<option value="Ненецкий АО">Ненецкий АО</option>
          	<option value="Ханты-Мансийский АО">Ханты-Мансийский АО</option>
          	<option value="Чукотский АО">Чукотский АО</option>
          	<option value="Ямало-Ненецкий АО">Ямало-Ненецкий АО</option>
          </select>
          </span>
          <span className = "filter__text_row">
            Wi-Fi:
          </span>
          <input required type = "checkbox" onChange = {this.validateWiFi} className = {"filter__input_check"} id = "filter__wifi"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__wifi"></label>
          <span className = "filter__text_row">
            Парковочные места:
          </span>
          <input required type = "checkbox" onChange = {this.validateParkingSpace} className = {"filter__input_check"} id = "filter__park"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__park"></label>
          <span className = "filter__text_row">
            Разрешено ли с животными:
          </span>
          <input required type = "checkbox" onChange = {this.validateAnimals} className = {"filter__input_check"} id = "filter__animals"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__animals"></label>
          <span className = "filter__text_row">
            Электричество:
          </span>
          <input required type = "checkbox" onChange = {this.validateElectricity} className = {"filter__input_check"} id = "filter__electricity"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__electricity"></label>
          <span className = "filter__text_row">
            Еда:
          </span>
          <input required type = "checkbox" onChange = {this.validateFood} className = {"filter__input_check"} id = "filter__food"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__food"></label>
          <span className = "filter__text_row">
            Спальные места:
          </span>
          <input required type = "checkbox" onChange = {this.validateSleep} className = {"filter__input_check"} id = "filter__sleep"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__sleep"></label>
          <span className = "filter__text_row">
            Вода:
          </span>
          <input required type = "checkbox" onChange = {this.validateWater} className = {"filter__input_check"} id = "filter__water"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__water"></label>
          <span className = "filter__text_row">
            Зона для некурящих:
          </span>
          <input required type = "checkbox" onChange = {this.validateSmoke} className = {"filter__input_check"} id = "filter__nonsmoke"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__nonsmoke"></label>
          <span className = "filter__text_row">
            Можно ли с детьми:
          </span>
          <input required type = "checkbox" onChange = {this.validateKids} className = {"filter__input_check"} id = "filter__kids"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__kids"></label>
          <span className = "filter__text_row">
            Подходит для людей с огр. способностями:
          </span>
          <input required type = "checkbox" onChange = {this.validateDisabilities} className = {"filter__input_check"} id = "filter__disabilities"></input>
          <label className = {"filter__input_checkbox"} id = "product__discount_checkbox" htmlFor="filter__disabilities"></label>
        </div>
        <div className = "camplist__content">
          {itemsList}
        </div>
      </div>
    )
  }
}

export default CampingList;