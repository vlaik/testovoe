import React from 'react'
import { connect } from 'react-redux'
import InfoWeather from './InfoWeather'


function WeatherView(props){
    const ViewWeather = props.statusWeatherInfo;
    if(ViewWeather === true){
        return(
            <div className='wtf'>
                <InfoWeather/>
            </div>
        )
    }
    else return null;
    
}


const mapStateToProps = (state) =>{
    return{
        statusWeatherInfo: state.weatherValueReduser.statusWeather
    }
}


export default connect(mapStateToProps)(WeatherView);