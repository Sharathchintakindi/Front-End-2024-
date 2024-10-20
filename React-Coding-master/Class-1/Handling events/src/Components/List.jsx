import styles from "./List.module.css";

function List({ items, bought, handledButtonClicked }) {
  return (
    <>
      <li
        className={`${styles["kg-Item"]} list-group-item ${bought && "active"}`}
      >
        <span className={styles["kg-span"]}> {items}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handledButtonClicked}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default List;
