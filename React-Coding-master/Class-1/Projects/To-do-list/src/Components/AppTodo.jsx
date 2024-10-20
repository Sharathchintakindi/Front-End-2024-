function AppTodo() {
  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div className="col-4">
            <input type="text" placeholder="Enter Your TODO Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success button1">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppTodo;
