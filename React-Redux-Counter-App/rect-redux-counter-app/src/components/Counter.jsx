import { React} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../main-services/action/counterAction";

const Counter = () => {
  
  const count = useSelector(state => state.count)  // useSelector use state value access
  // console.log(count)
  const dispatch = useDispatch()   // useDispatch use for dispatch action


const increment = () =>{ dispatch(incrementCounter())}

const decrement = () =>{dispatch(decrementCounter())}

const reset = () => {dispatch(resetCounter())}


  return (
    <div>
      <div>count:{count}</div>

      <button type="button" onClick={decrement}>DECREMENT</button>
      <button type="button" onClick={increment}>INCREMENT</button>
      <button type="button" onClick={reset}>RESET</button>

    </div>
  );
};

export default Counter;
