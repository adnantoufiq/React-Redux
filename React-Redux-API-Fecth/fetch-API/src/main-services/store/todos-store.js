import thunk  from 'redux-thunk'

import {createStore,applyMiddleware} from "redux"

import todosReducer from "../reducer/todo-reducer";


const store = createStore(todosReducer, applyMiddleware(thunk) )

export default store;