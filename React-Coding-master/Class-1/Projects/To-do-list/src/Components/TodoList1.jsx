function TodoList1() {
  let TodoName = "Buy Milk";
  let TodoDate = "04/20/2024";
  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div className="col-4">{TodoName}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button1 ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoList1;
