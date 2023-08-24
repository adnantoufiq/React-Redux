const {  ADD_USER } = require('./consts');

// require module
const { createStore } = require('redux');






/** users state define */
const initialUsersState ={
    users:['arif'],
    countUser: 1 
  }

/** ADD_USER */

const addUser = (value) => {
    return {
      type: ADD_USER,
      payload: value,
    };
  };
  

/**
 * Reducer function always takes two parameter( state, action)
 * @param {*} state  initial value for state 
 * @param {*} action  action for user add and count user
 * @returns 
 */

const userCounterReducer = ( state = initialUsersState, action) => {

    switch (action.type) {
      case ADD_USER:
        return{
          users:[...state.users, action.payload],
          countUser: state.countUser + 1
        }
         
      default:
        state;
    }
  
  
  }  

  const userStore = createStore(userCounterReducer) // store create

  userStore.subscribe(()=>{
  console.log(userStore.getState())   // check state value  using store.getState()
  })
  
  // action dispatch
  userStore.dispatch(addUser("islam"))
  userStore.dispatch(addUser("toufiq"))  

