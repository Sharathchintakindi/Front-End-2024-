import React from "react";

const App = () => {
  function Clicked() {
    // e.preventDefault();
    console.log("Clicked");
  }

  return (
    <div>
      <button onClick={Clicked}>Clicked</button>
    </div>
  );
};

export default App;


