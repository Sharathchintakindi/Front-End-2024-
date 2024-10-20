import React from "react";

const Item = ({ name, isPacked }) => {
  return (
    <li className='"item'>
      {name}
      {isPacked && "???"}
    </li>
  );
};

const App = () => {
  return (
    <div>
      <h1>Sally's Ride's Packaging List</h1>
      <ul>
        <Item isPacked={true} name="Sharath" />
        <Item isPacked={true} name="ch" />
        <Item isPacked={false} name="CH" />
      </ul>
    </div>
  );
};

export default App;
