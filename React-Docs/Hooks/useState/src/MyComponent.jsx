import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Sharath");
  const [age, setAge] = useState(0);
  const [empolyed, setEmpolyed] = useState(false);

  const updateName = () => {
    setName("Sharath_Chintakindi");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateEmpolyed = () => {
    setEmpolyed(!empolyed);
  };

  return (
    <>
      <h1>Name : {name}</h1>
      <button onClick={updateName}> UpdateName</button>

      <h1>Age : {age}</h1>
      <button onClick={updateAge}> UpdateAge</button>

      <h1>Empolyed : {empolyed ? "Yes" : "No"}</h1>
      <button onClick={updateEmpolyed}> UpdateEmpolyed</button>
    </>
  );
};

export default MyComponent;
