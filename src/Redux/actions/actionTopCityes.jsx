import axios from 'axios'
export const TOP_WEATHER_CITY_API = 'TOP_WEATHER_CITY_API';
export const TOP_WEATHER_LONDON = 'TOP_WEATHER_LONDON';
export const TOP_WEATHER_ROME = 'TOP_WEATHER_ROME';
export const TOP_WEATHER_MADRID = 'TOP_WEATHER_MADRID';
export const TOP_WEATHER_MUMBAI = 'TOP_WEATHER_MUMBAI';
export const TOP_WEATHER_NEWYORK = 'TOP_WEATHER_NEWYORK';
export const TOP_WEATHER_MOSCOU = 'TOP_WEATHER_MOSCOU';
export const TOP_WEATHER_DUBAI = 'TOP_WEATHER_DUBAI';
export const TOP_WEATHER_BERLIN = 'TOP_WEATHER_BERLIN';
export const TOP_WEATHER_ATHENS = 'TOP_WEATHER_ATHENS';


// get API PARIS
export const TopWeatherParis = (getTopApi) =>{
    return{
        type: TOP_WEATHER_CITY_API,
        payload: getTopApi
    }
}

export const getWeatherApiParis = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApi) => dispatch(TopWeatherParis(getTopApi)))
    }
}


//get API LONDON
export const TopWeatherLondon = (getTopApiL) =>{
    return{
        type: TOP_WEATHER_LONDON,
        payload: getTopApiL
    }
}


export const getWeatherApiLondon = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiL) => dispatch(TopWeatherLondon(getTopApiL)))
    }
}


//get API ROME

export const TopWeatherRome = (getTopApiR) =>{
    return{
        type: TOP_WEATHER_ROME,
        payload: getTopApiR
    }
}


export const getWeatherApiRome = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiR) => dispatch(TopWeatherRome(getTopApiR)))
    }
}

// get API MADRID
export const TopWeatherMadrid = (getTopApiM) =>{
    return{
        type: TOP_WEATHER_MADRID,
        payload: getTopApiM
    }
}


export const getWeatherApiMadrid = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiM) => dispatch(TopWeatherMadrid(getTopApiM)))
    }
}


// get API MUMBAI
export const TopWeatherMumbai = (getTopApiMumb) =>{
    return{
        type: TOP_WEATHER_MUMBAI,
        payload: getTopApiMumb
    }
}


export const getWeatherApiMumbai = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiMumb) => dispatch(TopWeatherMumbai(getTopApiMumb)))
    }
}


// get API NEW YORK
export const TopWeatherNewYork = (getTopApiNY) =>{
    return{
        type: TOP_WEATHER_NEWYORK,
        payload: getTopApiNY
    }
}


export const getWeatherApiNewYork = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiNY) => dispatch(TopWeatherNewYork(getTopApiNY)))
    }
}


// get API MOSCOU
export const TopWeatherMoscou = (getTopApiMosc) =>{
    return{
        type: TOP_WEATHER_MOSCOU,
        payload: getTopApiMosc
    }
}


export const getWeatherApiMoscou = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiMosc) => dispatch(TopWeatherMoscou(getTopApiMosc)))
    }
}


// get API DUBAI
export const TopWeatherDubai = (getTopApiD) =>{
    return{
        type: TOP_WEATHER_DUBAI,
        payload: getTopApiD
    }
}


export const getWeatherApiDubai = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiD) => dispatch(TopWeatherDubai(getTopApiD)))
    }
}


// get API BERLIN
export const TopWeatherBerlin = (getTopApiBer) =>{
    return{
        type: TOP_WEATHER_BERLIN,
        payload: getTopApiBer
    }
}


export const getWeatherApiBerlin = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiBer) => dispatch(TopWeatherBerlin(getTopApiBer)))
    }
}


// get API ATHENS
export const TopWeatherAthens = (getTopApiAth) =>{
    return{
        type: TOP_WEATHER_ATHENS,
        payload: getTopApiAth
    }
}


export const getWeatherApiAthens = (url) =>{
    return (dispatch) =>{
        axios.get(url)
        .then(response =>{
            return response.data
        })
        .then((getTopApiAth) => dispatch(TopWeatherAthens(getTopApiAth)))
    }
}