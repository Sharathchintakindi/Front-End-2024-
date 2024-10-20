import React from "react";
import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}> Clicked {count} times</button>
    </div>
  );
};

export default Button;
