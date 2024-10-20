import MobileList from "./Components/MobileList";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  let MobileItems = ["Apple", "Samsung", "Realme", "Oneplus"];
  // let MobileItems = [];
  return (
    <center>
      <>
        <h2>Mobile Phones</h2>
        <MobileList items={MobileItems} />
        <ErrorMessage items={MobileItems} />
      </>
    </center>
  );
}

export default App;
