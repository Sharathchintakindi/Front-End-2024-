import React from "react";

const App = () => {
  const products = [
    {
      title: "Cabbage",
      id: 1,
      isFruite: false,
    },
    {
      title: "Garlic",
      id: 2,
      isFruite: false,
    },
    {
      title: "Apple",
      id: 3,
      isFruite: true,
    },
  ];

  const listOfItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruite ? "magenta" : "yellow" }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <ul>{listOfItems}</ul>
    </div>
  );
};

export default App;
