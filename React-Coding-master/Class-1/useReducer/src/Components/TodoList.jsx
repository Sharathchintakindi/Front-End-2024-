import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../../store/todo-items-store";

function TodoList({ TodoName, TodoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div className="col-4">{TodoName}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger button1"
              onClick={() => deleteItem(TodoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
