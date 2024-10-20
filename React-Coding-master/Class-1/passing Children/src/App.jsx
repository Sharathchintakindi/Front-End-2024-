import FoodList from "./Components/FoodList";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  let FoodItems = ["Apple", "Mango", "Banana", "Orange"];
  // let FoodItems = [];
  return (
    <>
      <Container>
        <center>
          <h1>Health Food Items </h1>
          <ErrorMessage items={FoodItems} />
          <FoodList items={FoodItems} />
        </center>
      </Container>
      <Container>
        <p>Here, Are the list of the Items for the Fruits that we are eating</p>
      </Container>
    </>
  );
}

export default App;
