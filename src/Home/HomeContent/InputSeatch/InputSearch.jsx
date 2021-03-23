import React from 'react';
import { connect } from 'react-redux';
import './styleinput.scss';
import Fade from 'react-reveal/Fade';
import BackSeatch from '../../../image/buttonsearch.png'
import { statusInput, addCityValueInput, addTrackToValue } from '../../../Redux/actions/action'
import { Link } from 'react-router-dom'


function InputSeatch(props){
    const handleInputChange = (e) => {
        props.targetValue(e.target.value);
      };
    const nextStatusInput = props.statusInput;
    if(nextStatusInput === false){
        return(
            <form className='inputStatus'>
                <input
                className='seatchinput'
                placeholder='search'
                type="text"/>
                <input
                style={backgroundSearch}
                className='sumbitinput'
                type="button"/>
            </form>
        )
    }
    else return (
        <Fade left>
        <form className='inputStatus'>
                <input
                value={props.valueInputCity}
                onChange={handleInputChange}
                className='seatchinput'
                placeholder='Select City'
                type="text"/>
                <Link to='/'>
                <input
                onClick={props.trackToValue}
                style={backgroundSearch}
                className='sumbitinput'
                type="button"/>
                </Link>
          
            </form>
            </Fade>
    );
    
}


const backgroundSearch = {
    backgroundImage: `url(${BackSeatch})`
  
};

const mapStateToProps = (state) =>{
    return{
        statusInput: state.reduser.status,
        valueInputCity: state.weatherValueReduser.value
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        testoncklick:() => dispatch(statusInput(false)),
        targetValue: (value) => dispatch(addCityValueInput(value)),
        trackToValue: (payload) => dispatch(addTrackToValue(true))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputSeatch);