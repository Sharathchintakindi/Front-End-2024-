import { useState } from "react";
import List from "./List";

function ItemList({ items }) {
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
            items={item}
            bought={activeItems.includes(item)}
            handledButtonClicked={() => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
