import React, { useContext } from "react";
import { userContext } from "./ComponentA";

const ComponentD = () => {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Happy Life and Long Life ${user}`}</h2>
    </div>
  );
};

export default ComponentD;
