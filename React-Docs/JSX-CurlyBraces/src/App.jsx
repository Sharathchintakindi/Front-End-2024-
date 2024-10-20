import React from "react";

const App = () => {
  const Person = {
    name: "Sharath Chintakindi",
    theme: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div style={Person.theme}>
      <h1>{Person.name}</h1>
      <ul>
        <li>Improve Your Speaking</li>
        <li>Well Educated</li>
        <li>Workholic</li>
      </ul>
    </div>
  );
};

export default App;
rafce