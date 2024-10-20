import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoList1 from "./Components/TodoList1";
import TodoList2 from "./Components/TodoList2";
import "./App.css";

function App() {
  return (
    <>
      <center className="To-do-container">
        <AppName />
        <AppTodo />
        <div className="Items-Container">
          <TodoList1 />
          <TodoList2 />
        </div>
      </center>
    </>
  );
}

export default App;
