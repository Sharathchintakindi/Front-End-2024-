import { useContext } from "react";
import ComponentD from "./ComponentD";
import { userContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>{`Hello there ${user}`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
