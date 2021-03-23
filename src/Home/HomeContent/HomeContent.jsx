import React from 'react'
import './homecontent.scss'
import { connect } from 'react-redux';
import { statusInput } from '../../Redux/actions/action';
import InputSearch from './InputSeatch/InputSearch';


function HomeContent(props){
    return(
        <div className='homeContent'>
            <InputSearch/>
            <div>
                <button
                onClick={props.nexStatusInput}
                className='addCity'><span>&#43;</span></button>
                <span><h1>Add location</h1><p>Did you know you can add favourite <br/>locations?</p></span>
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{

    }
};


const mapDispatchToProps = (dispatch) =>{
    return{
        nexStatusInput:() => dispatch(statusInput(true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);