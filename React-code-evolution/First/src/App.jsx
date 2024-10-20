import React from "react";
import Greet from "./Components/Greet";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";

const App = () => {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {
        /* /* <Counter /> */
        // <Greet name="IronMan">
        //   <p1>This is Children Props</p1>
        // </Greet>
        // <Greet name="Hulk" />
        // <Greet name="Human">
        //   <p1>This is also Children Container</p1>
        // </Greet>
        // <Greet imageName="Cyber" />
        /* <Message /> */
      }
    </div>
  );
};

export default App;
