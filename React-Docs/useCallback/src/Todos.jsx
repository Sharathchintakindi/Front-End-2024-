import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
