import { useState } from "react";
import List from "./List";

function FoodList({ items }) {
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <List
            key={item}
            listofItems={item}
            bought={activeItems.includes(item)}
            HandleButtonOnClick={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodList;
