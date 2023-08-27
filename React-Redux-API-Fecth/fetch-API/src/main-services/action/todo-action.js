/**
 * action define
 */

import { API_URL, GET_TODOS_API_REQUEST, GET_TODOS_FAIL, GET_TODOS_SUCCESS } from "../consts/todo-consts"
import axios from "axios"

export const getTodos = () => 

      async(dispatch)=>{

          
    dispatch({type:GET_TODOS_API_REQUEST})

    try {
        const response = await axios.get(API_URL)
        dispatch({type:GET_TODOS_SUCCESS, payload: response.data})
        
    } catch (error) {
        dispatch({type:GET_TODOS_FAIL, payload: error.message})
        
    }

}


/**
 * ACTION-define
 * @returns  get todos success
 */

export const getTodosSuccess = (todos) =>{

    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }

}

/**
 * ACTION-define
 * @returns  get todos fail
 */

 export const getTodosFail = (error) =>{

    return {
        type: GET_TODOS_FAIL,
        payload: error
    }

}