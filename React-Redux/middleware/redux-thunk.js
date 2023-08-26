const { default: thunk } = require("redux-thunk");
const { GET_TODOS_API_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAIL } = require("../consts")
const { createStore, applyMiddleware } = require('redux');
const { default: axios } = require("axios");

/** STATE -define */


const initialTodosState = {
    todos: [],
    isLoading: false,
    error:  null,
}


/** ACTION -define
 * 
 * GET_TODOS_API_REQUEST
 */

const getTodos = () =>{

    return {
        type: GET_TODOS_API_REQUEST,
    }

}

/**
 * ACTION-define
 * @returns  get todos success
 */

const getTodosSuccess = (todos) =>{

    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }

}

/**
 * ACTION-define
 * @returns  get todos fail
 */

const getTodosFail = (error) =>{

    return {
        type: GET_TODOS_FAIL,
        payload: error
    }

}


const todosReducers = ( state = initialTodosState, action ) =>{
    switch (action.type) {
        case GET_TODOS_API_REQUEST:
            return{
                ...state,
                isLoading:true

            }

        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                todos:action.payload               
            } 

        case GET_TODOS_FAIL:
                return{
                    ...state,
                    isLoading:false,
                    error: action.payload
                    
                }    
        default:
            return state;
    }

}


// async action
const todoDataFatch = ( ) =>{

    return (dispatch) =>{

        dispatch(getTodos());
        
        axios.get(API_URL)
        .then((response)=>{
            console.log(response.data)

        })
        .catch((err)=>{
            console.log(err.message)
        })


    }


}


/**
 * dispatch action
 * STORE create - (getState(), dispatch(), subscribe())
 * createStore takes 2 parameter which is (reducer-function and middleware)
 */

const store = createStore(todosReducers, applyMiddleware(thunk))

store.subscribe(()=>{
  console.log(store.getState())   // check state value  using store.getState()

})

// action dispatch
store.dispatch(todoDataFatch())
