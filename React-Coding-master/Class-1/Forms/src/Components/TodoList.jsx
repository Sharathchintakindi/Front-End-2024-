import { MdDeleteOutline } from "react-icons/md";

function TodoList({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <>
      <div class="container ">
        <div class="row row1">
          <div class="col-4">{TodoName}</div>
          <div class="col-4">{TodoDate}</div>
          <div className="col-2">
            <button
              type="button"
              class="btn btn-danger button1"
              onClick={() => onDeleteClick(TodoName)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
