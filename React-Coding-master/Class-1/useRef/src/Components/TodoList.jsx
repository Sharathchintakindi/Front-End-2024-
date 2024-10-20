import { MdDeleteOutline } from "react-icons/md";

function TodoList({ TodoName, TodoDate, onDeleteClick }) {
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
