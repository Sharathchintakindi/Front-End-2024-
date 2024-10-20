import { BiMessageAdd } from "react-icons/bi";
import { useContext, useState } from "react";
import { TodoItemsContext } from "../../store/todo-items-store";

function AppTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const [toDoName, setToDoName] = useState();
  const [toDoDate, setToDoDate] = useState();

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(toDoName, toDoDate);
    setToDoName("");
    setToDoDate("");
  };

  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Your Todo"
              value={toDoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={toDoDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success button1"
              onClick={handleAddButtonClicked}
            >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppTodo;
