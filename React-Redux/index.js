const { INCREMENT, DECREMENT,  RESET, INCREMENT_BY_VALUE, ADD_USER } = require('./consts');

// require module
const { createStore } = require('redux');


/**
 * STATE Define
 * ACTION Dispatch
 * REDUCER Function
 * STORE Update
 */

// STATE define

/** counter state define */
const initialCounterState = {
  counter: 0,
};

/** users state define */
const initialUsersState ={
  users:['arif'],
  countUser: 1 
}

// ACTION is an object with two value(type, payload)

/** INCREMENT_COUNTER */

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

/** DECREMENT_COUNTER */

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

/** RESET_COUNTER */

const resetCounter = () => {
  return {
    type: RESET,
  };
};

/** INCREMENT_BY_VALUE */

const incrementByValueCounter = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};



/** ADD_USER */

const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};


/**
 * Reducer function always takes two parameter
 * @param {*} state  initial value for state 
 * @param {*} action  action create increment , decrement, reset, increment_by_value
 * @returns 
 */

// const counterReducer = (state = initialCounterState , action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,   // getting all the value from initialCounterState
//         counter: state.counter + 1,    // only change counter value
//       };

//     case DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case RESET:
//         return {    
//           counter: 0,
//         };  
//     case INCREMENT_BY_VALUE:
//           return {
//             ...state,
//             counter: state.counter + action.payload,
//           };    
//     default:
//       state;
//   }
// };

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

// STORE - ( getState(), dispatch(), subscribe() )

// const counterStore = createStore(counterReducer) // store create

// counterStore.subscribe(()=>{
//   console.log(counterStore.getState())   // check state value  using store.getState()
// })

// action dispatch

// counterStore.dispatch(incrementCounter())
// counterStore.dispatch(incrementCounter())
// counterStore.dispatch(decrementCounter())
// counterStore.dispatch(resetCounter())
// counterStore.dispatch(incrementByValueCounter(10))
// counterStore.dispatch(incrementByValueCounter(20))






const userStore = createStore(userCounterReducer) // store create

userStore.subscribe(()=>{
console.log(userStore.getState())   // check state value  using store.getState()
})

// action dispatch
userStore.dispatch(addUser("islam"))
userStore.dispatch(addUser("toufiq"))





