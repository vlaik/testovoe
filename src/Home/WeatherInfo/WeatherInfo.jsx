import React, { useEffect } from 'react';
import './weatherinfo.scss';
import Beach from '../../image/beach.jpg';
import WeatherView from './WeatherView';

function WeatherInfoMe(props){
    return(
        <div className='Weather-contant' style={ backgroundImg }>
            <WeatherView/>
        </div>
    )
}

const backgroundImg = {
    backgroundImage: `url(${Beach})`
  
};




export default WeatherInfoMe;