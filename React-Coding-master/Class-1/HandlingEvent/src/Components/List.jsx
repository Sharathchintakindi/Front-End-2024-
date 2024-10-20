import styles from "./List.module.css";

function List({ listofItems, HandleButtonOnClick }) {
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{listofItems}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={HandleButtonOnClick}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default List;
