import './App.css';
import {useState} from 'react'

function App() {
  const [data,setData] = useState("")
  return (
    <div className="App">
      <h1>Test Click Event with Button</h1>
      <button onClick={()=>setData("Updated data")}>Update data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
