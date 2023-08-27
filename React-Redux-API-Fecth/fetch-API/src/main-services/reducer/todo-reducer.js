import { GET_TODOS_API_REQUEST, GET_TODOS_FAIL, GET_TODOS_SUCCESS } from "../consts/todo-consts";
import initialTodosState from "../state/todos-state";



const todosReducer = ( state = initialTodosState, action ) =>{
    switch (action.type) {
        case GET_TODOS_API_REQUEST:
            return{
                ...state,
                isLoading: true

            }

        case GET_TODOS_SUCCESS:
            return{
              
                isLoading: false,
                todos:action.payload  , 
                error: null          
            } 

        case GET_TODOS_FAIL:
                return{
                   
                    isLoading:false,
                    todos: [],
                    error: action.payload
                    
                }    
        default:
            return state;
    }

}


export default todosReducer;