import styles from "./foodInput.module.css";

function FoodInput({ handleKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Fruits here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default FoodInput;
