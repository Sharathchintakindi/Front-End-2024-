import TodoList from "./TodoList";
import { TodoItemsContext } from "../../store/todo-items-store";
import { useContext } from "react";

function TodoLists() {
  const { todoListItems } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoListItems.map((item) => (
        <TodoList
          key={item.name}
          TodoName={item.name}
          TodoDate={item.DueDate}
        />
      ))}
    </div>
  );
}
export default TodoLists;
