export const SWITCH_STATUS = 'SWITCH_STATUS';
export const ADD_VALUE = 'ADD_VALUE';
export const ADD_TRACK = 'ADD_TRACK';
export const SWITCH_STATUS_PORTAL = 'SWITCH_STATUS_PORTAL';


export const statusInput = (nextStatus) =>{
    return{
        type: SWITCH_STATUS,
        payload: nextStatus
    }
}


export const addTrackToValue = (nextStatus) =>{
    return{
        type: ADD_TRACK,
        payload:{
            payloadStatus: nextStatus,
            payloadClear: ''
        }
    }
}



export const addCityValueInput = (value) =>{
    return{
        type: ADD_VALUE,
        payload: value
    }
}

export const statusPortal = (nextStatus) =>{
    return{
        type: SWITCH_STATUS_PORTAL,
        payload: nextStatus
    }
}