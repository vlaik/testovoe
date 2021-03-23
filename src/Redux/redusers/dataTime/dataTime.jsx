import { DateTime } from 'luxon';



const time = DateTime.local();
console.log(time)



export const initialState = time.c;


export default function dataTime(state = initialState,{type, payload}){
    return{
        ...state
    }
}