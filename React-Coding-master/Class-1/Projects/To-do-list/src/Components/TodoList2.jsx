function TodoList2() {
  let TodoName = "College";
  let TodoDate = "08/20/2024";
  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div className="col-4">{TodoName}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoList2;
