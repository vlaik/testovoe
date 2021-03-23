import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherApiParis, getWeatherApiLondon,
         getWeatherApiRome,  getWeatherApiMadrid,
         getWeatherApiMumbai, getWeatherApiNewYork,
         getWeatherApiMoscou, getWeatherApiDubai,
         getWeatherApiBerlin, getWeatherApiAthens

        } from '../../Redux/actions/actionTopCityes';
import Paris from '../../image/parise.jpg'
import London from '../../image/london.jpg'
import Rome from '../../image/rome.jpg'
import Madrid from '../../image/madrid.jpg'
import Mumbai from '../../image/mumbai.jpg'
import NewYork from '../../image/newyork.jpg'
import Moscou from '../../image/moskou.jpg'
import Dubai from '../../image/dubai.jpg'
import Berlin from '../../image/berlin.jpg'
import Athens from '../../image/afins.jpg'
import './topweathercities.scss';



function TopWeatherCities(props){
    useEffect(() => {
        const result = props.axiosGetParis(
        `https://api.openweathermap.org/data/2.5/weather?q=Париж&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
        );
      },
      [props.axiosGetParis]
      );
      useEffect(() => {
        const resul = props.axiosGetLondon(
            `https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetLondon]
      );
      useEffect(() => {
        const resuls = props.axiosGetRome(
            `https://api.openweathermap.org/data/2.5/weather?q=Рим&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetRome]
      );
      useEffect(() => {
        const resula = props.axiosGetMadrid(
            `https://api.openweathermap.org/data/2.5/weather?q=Мадрид&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetMadrid]
      );
      useEffect(() => {
        const resuld = props.axiosGetMumbai(
            `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetMumbai]
      );
      useEffect(() => {
        const resulz = props.axiosGetNewYork(
            `https://api.openweathermap.org/data/2.5/weather?q=HongKong&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetNewYork]
      );
      useEffect(() => {
        const resulx = props.axiosGetMoscou(
            `https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetMoscou]
      );
      useEffect(() => {
        const resulc = props.axiosGetDubai(
            `https://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetDubai]
      );
      useEffect(() => {
        const resulv = props.axiosGetBerlin(
            `https://api.openweathermap.org/data/2.5/weather?q=Берлин&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetBerlin]
      );
      useEffect(() => {
        const resulb = props.axiosGetAthens(
            `https://api.openweathermap.org/data/2.5/weather?q=Athens&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
            );
      },
      [props.axiosGetAthens]
      );
      
      if(props.testParis,props.testLondon,props.testRome,props.testMadrid,props.testMumbai,props.testNewYork,props.testMoscou,props.testDubai,props.testBerlin,props.testAthens){
        return(
          <div className='TopWeatherCities'>
              <div className='cxz' style={ backgroundImgParis }><h1>{props.cityNameParis} <p>{Math.round(props.testParis.temp -273)}</p></h1><h4>Париж – главный город Франции и один из красивейших городов мира. Посетить эту замечательную столицу любви и моды мечтает каждый.

В этом городе каждый турист сможет найти себе занятие по душе.</h4></div>
              <div className='cxz' style={ backgroundImgLondon }><h1>{props.cityNameLondon} <p>{Math.round(props.testLondon.temp -273)}</p></h1><h4>Лондон — столица Великобритании и один из величайших городов истории и современности. В Вестминстере работает правительство, здесь же расположены Букингемский дворец, самые лучшие национальные галереи, музеи, театры и клубы.</h4></div>
              <div className='cxz' style={ backgroundImgRome }><h1>{props.cityNameRome} <p>{Math.round(props.testRome.temp -273)}</p></h1><h4>Рим — «город на семи холмах», столица Италии и региона Лацио. Известно, что в античность Рим стали часто именовать Вечным. Возвращаясь с древности в наше время можно увидеть, что наименование Вечный как нельзя лучше обрисовывает город со стороны.</h4></div>
              <div className='cxz' style={ backgroundImgMadrid }><h1>{props.cityNameMadrid} <p>{Math.round(props.testMadrid.temp -273)}</p></h1><h4>Мадрид – столица Испании, признанная одним из красивейших городов мира. И это неудивительно, ведь здесь гармонично сочетаются современная и средневековая архитектура, а парковые комплексы достойны, чтобы по их аллеям совершали променад монаршие особы.</h4></div>
              <div className='cxz' style={ backgroundImgMumbai }><h1>{props.cityNameMumbai} <p>{Math.round(props.testMumbai.temp -273)}</p></h1><h4>Мумбаи — самый западный, многонациональный и крупный город Индии, расположенный на побережье Аравийского моря. Его часто называют «Воротами Индии». Мумбайские улицы заполнены людьми с разной культурой и уровнем благосостояния.</h4></div>
              <div className='cxz' style={ backgroundImgNewYork }><h1>{props.cityNameNewYork} <p>{Math.round(props.testNewYork.temp -273)}</p></h1><h4>Гонконг — государство в государстве со своими законами, порядками и культурой. Это место встречи Запада и Востока, где высокие технологии соседствуют с традиционным укладом жизни, небоскрёбы — с рыбацкими деревушками, а чопорные торговые центры – с хаотичными плавучими рынками.</h4></div>
              <div className='cxz' style={ backgroundImgMoscou }><h1>{props.cityNameMoscou} <p>{Math.round(props.testMoscou.temp -273)}</p></h1><h4>Москва — столица и крупнейший город России. Сюда ведут многие пути и человеческие судьбы, с этим городом связано множество роковых и знаменательных событий истории, людских радостей и надежд, несчастий и разочарований и, разумеется, легенд, мифов и преданий.</h4></div>
              <div className='cxz' style={ backgroundImgDubai }><h1>{props.cityNameDubai} <p>{Math.round(props.testDubai.temp -273)}</p></h1><h4>Дубай — удивительный город, в котором гармонично переплетены незыблемые восточные традиции с ультрасовременной архитектурой и инфраструктурой. Футуристический мегаполис на берегу Персидского залива, «арабское чудо в песках» неизменно притягивает к себе тысячи и тысячи туристов</h4></div>
              <div className='cxz' style={ backgroundImgBerlin }><h1>{props.cityNameBerlin} <p>{Math.round(props.testBerlin.temp -273)}</p></h1><h4>Берлин для россиян и народов стран СНГ – особый город. Здесь в мае 1945 года, после самой кровопролитной войны в истории, был повержен фашизм, поднято Знамя Победы. Город с большими амбициями</h4></div>
              <div className='cxz' style={ backgroundImgAthens }><h1>{props.cityNameAthens} <p>{Math.round(props.testAthens.temp -273)}</p></h1><h4>Афины — это особый город: ни одна европейская столица не может похвастаться подобным историческим и культурным наследием. Он по праву зовется колыбелью демократии и западной цивилизации.</h4></div>
          </div>
      )
      }
      else return null;
    
}


const backgroundImgParis = {
  backgroundImage: `url(${Paris})`

};
const backgroundImgLondon = {
  backgroundImage: `url(${London})`

};
const backgroundImgRome = {
  backgroundImage: `url(${Rome})`

};
const backgroundImgMadrid = {
  backgroundImage: `url(${Madrid})`

};
const backgroundImgMumbai = {
  backgroundImage: `url(${Mumbai})`

};
const backgroundImgNewYork = {
  backgroundImage: `url(${NewYork})`

};
const backgroundImgMoscou = {
  backgroundImage: `url(${Moscou})`

};
const backgroundImgDubai = {
  backgroundImage: `url(${Dubai})`

};
const backgroundImgBerlin = {
  backgroundImage: `url(${Berlin})`

};
const backgroundImgAthens = {
  backgroundImage: `url(${Athens})`

};

const mapStateToProps = (state) =>{
    return{
      cityNameParis: state.reduserTopCity.parisCities.name,
      cityNameLondon: state.reduserTopCity.londonCities.name,
      cityNameRome: state.reduserTopCity.romeCities.name,
      cityNameMadrid: state.reduserTopCity.madridCities.name,
      cityNameMumbai: state.reduserTopCity.mumbaiCities.name,
      cityNameNewYork: state.reduserTopCity.newyorkCities.name,
      cityNameMoscou: state.reduserTopCity.moscouCities.name,
      cityNameDubai: state.reduserTopCity.dubaiCities.name,
      cityNameBerlin: state.reduserTopCity.berlinCities.name,
      cityNameAthens: state.reduserTopCity.athensCities.name,
      testParis: state.reduserTopCity.parisCities.main,
      testLondon: state.reduserTopCity.londonCities.main,
      testRome: state.reduserTopCity.romeCities.main,
      testMadrid: state.reduserTopCity.madridCities.main,
      testMumbai: state.reduserTopCity.mumbaiCities.main,
      testNewYork: state.reduserTopCity.newyorkCities.main,
      testMoscou: state.reduserTopCity.moscouCities.main,
      testDubai: state.reduserTopCity.dubaiCities.main,
      testBerlin: state.reduserTopCity.berlinCities.main,
      testAthens: state.reduserTopCity.athensCities.main,     
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        axiosGetAthens: (url) => dispatch(getWeatherApiAthens(url)),
        axiosGetParis: (url) => dispatch(getWeatherApiParis(url)),
        axiosGetLondon: (url) => dispatch(getWeatherApiLondon(url)),
        axiosGetRome: (url) => dispatch(getWeatherApiRome(url)),
        axiosGetMadrid: (url) => dispatch(getWeatherApiMadrid(url)),
        axiosGetMumbai: (url) => dispatch(getWeatherApiMumbai(url)),
        axiosGetNewYork: (url) => dispatch(getWeatherApiNewYork(url)),
        axiosGetMoscou: (url) => dispatch(getWeatherApiMoscou(url)),
        axiosGetDubai: (url) => dispatch(getWeatherApiDubai(url)),
        axiosGetBerlin: (url) => dispatch(getWeatherApiBerlin(url)),
        

}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopWeatherCities);