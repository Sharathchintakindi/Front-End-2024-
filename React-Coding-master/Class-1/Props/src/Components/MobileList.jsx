import List from "./List";

function MobileList({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((mobile) => (
          <List key={mobile} ListofMobiles={mobile} />
        ))}
      </ul>
    </>
  );
}

export default MobileList;
