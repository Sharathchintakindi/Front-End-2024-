import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("Sharath");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h1>{`Hello there ${user}...!`}</h1>
      <userContext.Provider value={user}>
        <ComponentB user={user} />
      </userContext.Provider>
    </div>
  );
};

export default ComponentA;
