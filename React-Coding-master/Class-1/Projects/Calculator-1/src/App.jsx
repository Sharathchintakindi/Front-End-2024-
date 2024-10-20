import styles from "./App.Module.css";

function App() {
  return (
    <>
      <center>
        <div className={styles.calcualtor}>
          <input id="display" type="text" />
        </div>
        <div id="buttons">
          <button>C</button>
        </div>
      </center>
    </>
  );
}
export default App;
