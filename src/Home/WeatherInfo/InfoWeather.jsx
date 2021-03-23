import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './weatherinfo.scss';
import { axiosData } from '../../Redux/actions/actionApi';




function InfoWeather(props){
    useEffect(() => {
        const result = props.axiosGet(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.citySelect}&appid=eb015570a0698a9f6321006db8e00b01&lang=ru`,
        );
      },
      [props.axiosGet]
      );
    if(props.cityTemp, props.cityInfo){
            return(
                <div className='weather-info'>
                    <div>
                    <h1>{props.cityName}</h1>
                    <p>{props.timeHour.hour}:{props.timeHour.minute}</p>
                    <p className='temp'>{Math.round(props.cityTemp.temp -273)}&#176;</p>
                    <p className='description'>{props.cityInfo[0].description}</p>
                    </div>
                   
                    
                    
                    
                    
                </div>
            )
        
    }
    else return null;
}


const mapStateToProps = (state) =>{
    return{
        cityName: state.reduserApi.apiGetData.name,
        cityTemp: state.reduserApi.apiGetData.main,
        cityInfo: state.reduserApi.apiGetData.weather,
        citySelect: state.weatherValueReduser.citiesList,
        timeHour: state.dataTime
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        axiosGet: (url) => dispatch(axiosData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoWeather);