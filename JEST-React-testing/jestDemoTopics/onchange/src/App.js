import './App.css';
import {useState} from 'react'

function App() {
  const [data,setData] = useState("")
  return (
    <div className="App">
      <h1>Test OnChange Event with Input Text</h1>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value+"test")}/>
    </div>
  );
}

export default App;
