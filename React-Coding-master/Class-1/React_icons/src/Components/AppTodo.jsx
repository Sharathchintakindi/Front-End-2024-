import { BiMessageAdd } from "react-icons/bi";
import { useState } from "react";

function AppTodo({ onNewItem }) {
  const [toDoName, setToDoName] = useState();
  const [toDoDate, setToDoDate] = useState();

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(toDoName, toDoDate);
    setToDoName("");
    setToDoDate("");
  };

  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div class="col-4">
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
