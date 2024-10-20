function AppTodo() {
  return (
    <>
      <div class="container ">
        <div class="row row1">
          <div class="col-4">
            <input type="text" placeholder="Enter Your Todo" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-success button1">
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppTodo;
