import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/header'
import DailyWeather from './DailyWeather/DailyWeather'
import './home.scss'
import HomeContent from './HomeContent/HomeContent'
import WeatherDifferent from './WeatherDifferent/WeatherDifferent'
import WeatherInfo from './WeatherInfo/WeatherInfo'


function Home() {
    return (
        <div className='home'>
           
            <Header />
            <HomeContent />
            <DailyWeather />
            <WeatherInfo />
            <WeatherDifferent />
            <Footer />
            
        </div>
    )
}


export default Home;