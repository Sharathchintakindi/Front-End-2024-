import FoodList from "./Components/FoodList";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [FoodItems, setFoodItems] = useState([]);
  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...FoodItems, newFoodItems];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1>Health Food Items </h1>
        <FoodInput HandleKeyDown={onKeyDown} />
        <ErrorMessage items={FoodItems} />
        <FoodList items={FoodItems} />
      </Container>
    </>
  );
}

export default App;
