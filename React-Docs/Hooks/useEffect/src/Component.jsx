import React, { useEffect, useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  useEffect(() => {
    document.title = ` count ${count} ${color}`;
  }, [count, color]);
  return (
    <div>
      <h1 style={{ color: color }}>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Component;
