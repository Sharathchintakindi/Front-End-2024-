function TodoList2() {
  let TodoName = "College";
  let TodoDate = "22/5/2033";

  return (
    <>
      <div class="container ">
        <div class="row row1">
          <div class="col-4">{TodoName}</div>
          <div class="col-4">{TodoDate}</div>
          <div className="col-2">
            <button type="button"  handleDeleteItem class="btn btn-danger button1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList2;
