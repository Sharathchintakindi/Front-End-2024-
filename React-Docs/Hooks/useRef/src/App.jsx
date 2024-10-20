import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // const [number, setNumber] = useState(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.background = "Green";
    inputRef2.current.style.background = "";
    inputRef3.current.style.background = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "orange";
    inputRef3.current.style.background = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "";
    inputRef3.current.style.background = "red";
  }
  useEffect(() => {
    console.log("Component Rendered");
  });
  return (
    <div>
      <button onClick={handleClick1}>Click Me..1</button>
      <input ref={inputRef1} />
      <br />
      <br />

      <button onClick={handleClick2}>Click Me..2</button>
      <input ref={inputRef2} />
      <br />
      <br />

      <button onClick={handleClick3}>Click Me..3</button>
      <input ref={inputRef3} />
    </div>
  );
};

export default App;
