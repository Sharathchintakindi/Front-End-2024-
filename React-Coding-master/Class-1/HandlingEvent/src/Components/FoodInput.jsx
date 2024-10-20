import styles from "./foodInput.module.css";

function FoodInput({ HandleOnChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Food Item Here"
        className={styles.foodInput}
        onChange={HandleOnChange}
      />
    </>
  );
}

export default FoodInput;
