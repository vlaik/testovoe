import { AXIOS_DATA_TRUE } from '../../actions/actionApi';

export const initialState = {
    apiGetData: [],
}


export default function reduserApi(state = initialState,{type, payload}){
    switch (type) {
        case AXIOS_DATA_TRUE:
            return{
                ...state,
                apiGetData: payload
            }
            
        default: return{
            ...state
        }
    }
}