import List from "./List";

function FoodList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <List key={item} listofItems={item} />
        ))}
      </ul>
    </>
  );
}

export default FoodList;
