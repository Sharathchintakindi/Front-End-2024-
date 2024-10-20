import styles from "./foodInput.module.css";

function FoodInput({ HandleKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Food Item Here"
        className={styles.foodInput}
        onKeyDown={HandleKeyDown}
      />
    </>
  );
}

export default FoodInput;
