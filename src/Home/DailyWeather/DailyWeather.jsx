import React from 'react';
import './dayliweather.scss';
import PortalVideo from '../../PortalVideo/PortalVideo';
import { connect } from 'react-redux';
import { statusPortal } from '../../Redux/actions/action';
import Weather from '../../image/weather.jpg';
import Weather2 from '../../image/weather2.jpg';
import Weather3 from '../../image/weather3.jpg';

function DailyWeather(props){
    return(
        <div className='WeatherVideos'>
            <span>
                <h2>
                Daily Weather Forecast Videos    
                </h2>
                <p>Bireasrtasas mioyreas deuyasa souygas dekiertas</p>
            </span>
            <img onClick={props.statusPortalTrue} src={ Weather }  alt=""/>
            <img onClick={props.statusPortalTrue} src={ Weather2 } alt=""/>
            <img onClick={props.statusPortalTrue} src={ Weather3 } alt=""/>
            <PortalVideo/>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        statusPortalTrue: () => dispatch(statusPortal(true))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DailyWeather);