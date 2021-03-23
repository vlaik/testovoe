import { combineReducers } from 'redux';
import reduser from './redusers/switchStatus/reduser';
import weatherValueReduser from './redusers/weatherValue/weatherValue';
import reduserApi from './redusers/reduserApi/reduserApi';
import dataTime from './redusers/dataTime/dataTime';
import reduserTopCity from './redusers/reduserTopCity/reduserTopCity';


export default combineReducers({
    reduser,
    weatherValueReduser,
    reduserApi,
    dataTime,
    reduserTopCity
})