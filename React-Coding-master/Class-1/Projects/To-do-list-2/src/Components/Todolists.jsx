import TodoList from "./TodoList";

function TodoLists({ todoListItems }) {
  return (
    <div className="items-container">
      {todoListItems.map((item) => (
        <TodoList TodoName={item.name} TodoDate={item.DueDate} />
      ))}
    </div>
  );
}
export default TodoLists;
