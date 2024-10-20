import React from "react";

const FunctionClick = () => {
  function clickHandle() {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  );
};

export default FunctionClick;
