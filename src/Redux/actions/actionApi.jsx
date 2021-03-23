import axios from 'axios';
export const AXIOS_DATA_TRUE = 'AXIOS_DATA_TRUE';





export const axiosDataTrue = (getAxios) =>{
    return{
        type: AXIOS_DATA_TRUE,
        payload: getAxios
    }
}


export const axiosData = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data;
        })
        .then(getAxios => dispatch(axiosDataTrue(getAxios)))
    }
}


//weatherTopCities
