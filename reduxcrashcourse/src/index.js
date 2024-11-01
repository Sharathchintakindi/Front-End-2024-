import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NewApp from "./NewApp"
import { createStore } from "redux";
import reducers from "./Reducers";
import { Provider } from "react-redux";


// let store = createStore(petCounter)
// store.subscribe(()=>console.log(store.getState()))
// store.dispatch(petIncrement())
// store.dispatch(petIncrement())
// store.dispatch(petDecrement())

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    <NewApp/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
