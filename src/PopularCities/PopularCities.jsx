import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/header';
import './popularcities.scss';
import TopWeatherCities from './TopWeatherCities/TopWeatherCities';



function PopularCities(){
    return(
        <div>
            <Header/>
            <TopWeatherCities/>
            <Footer/>
        </div>
    )
}


export default PopularCities;