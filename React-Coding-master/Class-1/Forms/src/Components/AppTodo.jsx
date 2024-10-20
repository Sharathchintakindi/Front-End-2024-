import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AppTodo({ onNewItem }) {
  const [toDoName, setToDoName] = useState("");
  const [toDoDate, setToDoDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setToDoDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(toDoName, toDoDate);
    setToDoName("");
    setToDoDate("");
  };

  return (
    <>
      <div className="container ">
        <form onSubmit={handleAddButtonClicked}>
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
