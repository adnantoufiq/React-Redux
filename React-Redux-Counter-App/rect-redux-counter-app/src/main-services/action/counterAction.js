/** 
 * action- define (type, payload)
 */

import { DECREMENT, INCREMENT, RESET } from "../consts/constValue"

export const incrementCounter = () =>{
    return{
        type:INCREMENT
    }
}


 export const decrementCounter = () =>{
    return{
        type:DECREMENT
    }
}

export const resetCounter = (value) =>{
    return{
        type:RESET,
        payload: value
    }
}

