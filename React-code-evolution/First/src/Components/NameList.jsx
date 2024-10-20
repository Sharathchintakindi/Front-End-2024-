import React from "react";

function NameList() {
  const names = ["Sharath", "Chintakindi", "Sai"];
  const persons = [
    {
      id: 1,
      name: "Sharath",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Chintakindi",
      age: 28,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Sai",
      age: 27,
      skill: "GitHub",
    },
  ];
  const namesList = names.map((name, index) => (
    <h2 key={index}>
      {index}  {name}
    </h2>
  ));
  return <div>{namesList}</div>;
}

export default NameList;
