import TodoList from "./TodoList";

function TodoLists({ todoListItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoListItems.map((item) => (
        <TodoList
          key={item.name}
          TodoName={item.name}
          TodoDate={item.DueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
export default TodoLists;
