import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  const otherCounter = useCallback(() => {
    setOtherCount((otherCount) => otherCount + 1);
  }, []);

  return (
    <div>
      Count :{count}
      <div>otherCount = {otherCount}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={otherCounter}>Other Counter With State</button>
    </div>
  );
};

export default App;

