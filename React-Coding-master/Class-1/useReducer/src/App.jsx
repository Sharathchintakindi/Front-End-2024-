import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoLists from "./Components/Todolists";
import WelcomeMessage from "./Components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ToDoItemsContextProvider from "../store/todo-items-store";

function App() {
  return (
    <>
      <ToDoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AppTodo />
          <WelcomeMessage />
          <TodoLists />
        </center>
      </ToDoItemsContextProvider>
    </>
  );
}

export default App;
