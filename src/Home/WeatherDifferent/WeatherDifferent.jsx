import React from 'react';
import './weatherdifferent.scss';
import Pictures from '../../image/pictures.jpg';
import Feature from '../../image/feature.jpg';
import { Link } from 'react-router-dom';
import { addCityValueInput } from '../../Redux/actions/action';
import { connect } from 'react-redux';


function WeatherDifferent(props) {
    return(
        <div className='different'>
        <div className='pictures'>
            <img src={ Pictures } alt=""/>
            <h1>Weather In Pictures</h1>
            <hr/>
            <p>Koleacene anritma hasesera deyulety. Cumaser kertyase
             socisera natoqu eagnis dist mte dulmuese feugiata lecenaser 
             stricies phaser datyfena nec sit amm easer erment. 
             Utdolores urliquam eratesasvpatis. Miastas kertyase 
             fertasber tyasera miaseaInteger rutrum ante eu lacus uisque 
             nulla.</p>
             <Link to='/photo'><button>more &#62;</button></Link>
        </div>
        <div className='weather-forecasts'>
            <h1>TOP 10 CITY WEATHER FORECASTS</h1>
            <p>Cagnis dist mte dulmuese feugiata ecasit amm easer ermen:</p>
            <div className='weather-nav'>
                <input type="button" value="&#62; PARIS"/>
                <input type="button" value="&#62; NEW YORK"/>
                <input type="button" value="&#62; LONDON"/>
                <input type="button" value="&#62; MOSCOW"/>
                <input type="button" value="&#62; ROME"/>
                <input type="button" value="&#62; DUBAI"/>
                <input type="button" value="&#62; MADRID"/>
                <input type="button" value="&#62; BERLIN"/>
                <input type="button" value="&#62; MUMBAI"/>
                <input type="button" value="&#62; ATHENS"/>
            </div>
            <Link to='/popularcities'> <button className='more'>More</button></Link>
        </div>
        <div className='features-analysis'>
            <img src={ Feature } alt=""/>
            <h1>Features &#38; Analysis</h1>
            <p>Basermaser kertyass natoqus eagimte dulmuese feugiata 
                lecenaser stricies phaledat yfena nec sit amm easer erment.
                 Utdolores dapentum velursus.</p>
            <button className='more'>More</button>
        </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{
        valueCyti: state.weatherValueReduser.Paris,
        test: state.weatherValueReduser.value.target
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        targetValue: (value) => dispatch(addCityValueInput(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDifferent);