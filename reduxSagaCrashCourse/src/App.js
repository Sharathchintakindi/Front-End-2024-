import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {petIncrement,petDecrement,getUsers} from "./Actions"
import { useEffect } from 'react';

function App() {
  
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state=>state.users.loading);
  const error = useSelector(state=>state.users.error);
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  return (
    <div className="App">
      <h1>Welcome to React Redux-Sage crash course </h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user,i) => <h1 key={user.id}>{user.name}</h1>)}
      
    </div>
  );
}

export default App;
