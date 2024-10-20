import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {count}
      <button onClick={increment}>Incvrement</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
