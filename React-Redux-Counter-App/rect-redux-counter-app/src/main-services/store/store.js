
/**
 * @default  store  define 
 * its will use on main top file because we can access from top file easily
 */

import {createStore} from'redux'
import countReducer from "../reducer/counterReducer";

const store = createStore(countReducer) 

export default store;
