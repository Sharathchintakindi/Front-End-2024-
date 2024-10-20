import List from "./List";

function FoodList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <List
            key={item}
            listofItems={item}
            HandleButtonOnClick={() => console.log(`${item} added to cart`)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodList;
