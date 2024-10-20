import { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext } from "./ComponentA";

function ComponentB() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h2>{`Hello again : ${user}`}</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
