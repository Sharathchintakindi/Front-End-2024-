import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoLists from "./Components/Todolists";
import WelcomeMessage from "./Components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoListItems, setNewToDoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newItems = [
      ...todoListItems,
      { name: itemName, DueDate: itemDueDate },
    ];
    setNewToDoItems(newItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoListItems.filter(
      (item) => item.name !== todoItemName
    );
    setNewToDoItems(newToDoItems);
    // console.log(`Item Deleted ${todoItemName}`);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo onNewItem={handleNewItem} />
        {todoListItems.length === 0 && <WelcomeMessage />}
        <TodoLists
          onDeleteClick={handleDeleteItem}
          todoListItems={todoListItems}
        />
      </center>
    </>
  );
}

export default App;
