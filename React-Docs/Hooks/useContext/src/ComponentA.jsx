import { useState } from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const userContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Sharath");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`My name is: ${user}`}</h2>
      <userContext.Provider value={user}>
        <ComponentB user={user} />
      </userContext.Provider>
    </div>
  );
}

export default ComponentA;
