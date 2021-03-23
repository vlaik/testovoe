import { SWITCH_STATUS,SWITCH_STATUS_PORTAL } from '../../actions/action';

export const initialState = {
    status: false,
    statusPortal: false
}


export default function reduser(state = initialState,{type, payload}){
    switch (type) {
        case SWITCH_STATUS:
            return{
                ...state,
                status: payload
            }
        case SWITCH_STATUS_PORTAL:
            return{
                ...state,
                statusPortal: payload
            }
            
    
        default:
            return {
                ...state
            }
    }
}