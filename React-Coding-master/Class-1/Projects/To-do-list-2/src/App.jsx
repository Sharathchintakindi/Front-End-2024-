import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoLists from "./Components/Todolists";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const todoListItems = [
    {
      name: "Buy Milk",
      DueDate: "22/2/2023",
    },
    {
      name: "College",
      DueDate: "26/2/2023",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <TodoLists todoListItems={todoListItems} />
      </center>
    </>
  );
}

export default App;
