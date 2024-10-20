import FoodList from "./Components/FoodList";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  let FoodItems = ["Apple", "Mango", "Banana", "Orange"];
  const textToShow = "Food Items Entered by User";
  // let FoodItems = [];
  return (
    <>
      <Container>
        <h1>Health Food Items </h1>
        <ErrorMessage items={FoodItems} />
        <FoodInput
          HandleOnChange={(event) => console.log(event.target.value)}
        />
        <p>{textToShow}</p>
        <FoodList items={FoodItems} />
      </Container>
    </>
  );
}

export default App;
