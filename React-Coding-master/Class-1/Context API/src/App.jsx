import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoLists from "./Components/Todolists";
import WelcomeMessage from "./Components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function App() {
  const [todoListItems, setNewToDoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    const newItems = [
      ...todoListItems,
      { name: itemName, DueDate: itemDueDate },
    ];
    setNewToDoItems(newItems);
  };
  const deleteItem = (todoItemName) => {
    const newToDoItems = todoListItems.filter(
      (item) => item.name !== todoItemName
    );
    setNewToDoItems(newToDoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{todoListItems, addNewItem, deleteItem}}
      >
        <center className="todo-container">
          <AppName />
          <AppTodo />
          <WelcomeMessage />
          <TodoLists />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
