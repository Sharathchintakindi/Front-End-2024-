import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AppTodo({ onNewItem }) {
  const toDoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const toDoName = toDoNameElement.current.value;
    const toDoDate = dueDateElement.current.value;
    toDoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(toDoName, toDoDate);
  };

  return (
    <>
      <div className="container ">
        <form onSubmit={handleAddButtonClicked}>
          <div className="row row1">
            <div className="col-4">
              <input
                type="text"
                ref={toDoNameElement}
                placeholder="Enter Your Todo"
              />
            </div>
            <div className="col-4">
              <input type="date" ref={dueDateElement} />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success button1">
                <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AppTodo;
