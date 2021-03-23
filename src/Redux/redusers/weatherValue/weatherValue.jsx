import { ADD_TRACK } from '../../actions/action';
import { ADD_VALUE } from '../../actions/action';

export const initialState = {
    value: '',
    citiesList: [],
    statusWeather: false,
}


export default function weatherValueReduser(state = initialState,{type, payload}){
    switch (type) {
        case ADD_TRACK:
            const newList = [...state.citiesList,state.value]
            return{
                ...state,
                citiesList: newList,
                statusWeather: payload.payloadStatus,
                value: payload.payloadClear
            }
        case ADD_VALUE:
            return{
                ...state,
                value: payload
            }
    
        default: return {
            ...state
        }
    }
    
}