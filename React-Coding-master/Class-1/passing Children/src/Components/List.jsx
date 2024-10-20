import styles from "./List.module.css";

function List({ listofItems }) {
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={styles["kg-span"]}>{listofItems}</span>
      </li>
    </>
  );
}

export default List;
