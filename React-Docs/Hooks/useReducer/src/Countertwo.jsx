import React, { useReducer } from "react";

const intialState = {
  firstCounter: 0,
  secoundCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "Increment2":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "Decrement2":
      return { ...state, secoundCounter: state.secoundCounter - action.value };

    case "Reset":
      return intialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>firstCounter : {count.firstCounter}</h1>
      <h1>secondCounter : {count.secoundCounter}</h1>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 4 })}>
        Increment4
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 4 })}>
        Decrement4
      </button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <div>
        <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
          Increment counter 2
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
          Decrement counter 2
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
