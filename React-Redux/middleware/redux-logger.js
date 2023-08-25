
const { default: logger } = require("redux-logger");
const { ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT } = require("./consts")

const { createStore, applyMiddleware } = require('redux');




/** STATE initialization for products using object : */

const initialProductsState = {
      products: ['mango', "banana"],
      numberOfProducts: 2
}



/** ACTION define - (type, payload) */

/** ADD_PRODUCT */
const  addProduct = (value) =>{
  return {
    type: ADD_PRODUCT,
    payload: value
  }
}

/** GET_PRODUCT */

const  getProduct = () =>{
  return {
    type: GET_PRODUCT,
  }
}

/** DELETE_PRODUCT */

const  deleteProduct = (product) =>{
  return {
    type: GET_PRODUCT,
    payload: product
  }
}




/**
 * reducer function 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

const productReducer = (state = initialProductsState , action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],   // getting all the value from initialCounterState
        numberOfProducts: state.numberOfProducts + 1,    // only change counter value
      };

    case GET_PRODUCT:
      return {
        products:[...state.products]
      };
  
      case DELETE_PRODUCT:
        return {
          ...state.filter((p, i, products)=>{
             (p!== action.payload)
          })
        };
    
    default:
     return state;
  }
};

 


// STORE create - (getState(), dispatch(), subscribe())


const store = createStore(productReducer, applyMiddleware(logger)) // store create

store.subscribe(()=>{
  console.log(store.getState())   // check state value  using store.getState()
})


// action dispatch
store.dispatch(addProduct("orange"))



