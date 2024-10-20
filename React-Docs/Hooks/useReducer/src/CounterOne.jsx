import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

const Counterone = () => {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};

export default Counterone;
