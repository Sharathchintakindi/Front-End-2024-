import React from "react";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./app.css";
import HooksCakeCOntainer from "./Components/HooksCakeCOntainer";
import IceCreamContainer from "./Components/IceCreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeCOntainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
