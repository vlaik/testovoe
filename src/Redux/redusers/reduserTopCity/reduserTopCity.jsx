import { TOP_WEATHER_CITY_API, TOP_WEATHER_LONDON,
         TOP_WEATHER_ROME, TOP_WEATHER_MADRID,
         TOP_WEATHER_MUMBAI, TOP_WEATHER_NEWYORK,
         TOP_WEATHER_MOSCOU, TOP_WEATHER_DUBAI,
         TOP_WEATHER_BERLIN, TOP_WEATHER_ATHENS
        } from '../../actions/actionTopCityes';


export const initialState = {
    parisCities: [],
    londonCities: [],
    romeCities: [],
    madridCities: [],
    mumbaiCities: [],
    newyorkCities: [],
    moscouCities: [],
    dubaiCities: [],
    berlinCities: [],
    athensCities: []
}


export default function reduserTopCity(state = initialState,{type, payload}){
    switch (type) {
        case TOP_WEATHER_CITY_API:
            return{
                ...state,
                parisCities: payload
            }
        case TOP_WEATHER_LONDON:
            return{
                ...state,
                londonCities: payload
            }
        case TOP_WEATHER_ROME:
            return{
                ...state,
                romeCities: payload
            }
        case TOP_WEATHER_MADRID:
            return{
                 ...state,
                madridCities: payload
            }
        case TOP_WEATHER_MUMBAI:
            return{
                ...state,
                mumbaiCities: payload
            }
        case TOP_WEATHER_NEWYORK:
            return{
                ...state,
                newyorkCities: payload
            }
        case TOP_WEATHER_MOSCOU:
            return{
                ...state,
                moscouCities: payload
            }
        case TOP_WEATHER_DUBAI:
            return{
                ...state,
                dubaiCities: payload
            }
        case TOP_WEATHER_BERLIN:
            return{
                ...state,
                berlinCities: payload
            }
        case TOP_WEATHER_ATHENS:
            return{
                ...state,
                athensCities: payload
            }
    
        default: return{
            ...state
        }
    }
}

