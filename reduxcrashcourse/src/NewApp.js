import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {petIncrement,petDecrement} from "./Actions"

function App() {
  const petCounter = useSelector((state)=>state.petCounter)
  const petFavorite = useSelector((state)=>state.petFavorite)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>New Component - Add Pet to Favorite </h1>
      <button onClick={()=>dispatch(petIncrement(2))}>Add Pet</button>
      <button onClick={()=>dispatch(petDecrement())}>Remove Pet</button>
      <h1>Pet Counter {petCounter}</h1>
      <h2>Number of favorite pets so far {petFavorite}</h2>
    </div>
  );
}

export default App;
