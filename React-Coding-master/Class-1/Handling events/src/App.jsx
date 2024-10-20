import ErrorMessage from "./Components/ErrorMessage";
import ItemList from "./Components/ItemsList";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  // let FoodListItems = ["Apple", "Orange", "Kiwi", "Green Apple"];
  let [FoodListItems, setFoodItemsList] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let foodNewItemsList = event.target.value;
      let newItems = [...FoodListItems, foodNewItemsList];
      event.target.value = " ";
      setFoodItemsList(newItems);
    }
  };
  // let FoodListItems = [];
  return (
    <>
      <Container>
        <center>
          <h1>HEALTY FOODS</h1>
        </center>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={FoodListItems} />
        <ItemList items={FoodListItems} />
      </Container>
    </>
  );
}
export default App;
