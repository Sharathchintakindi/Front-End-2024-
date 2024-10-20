import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  let MobilePhones = ["Realme", "Poco", "Apple", "Samsung"];
  // let MobilePhones = [];

  // Using ternary operator
  // let emptyMessage = MobilePhones.length === 0 ? <h2>No new Models</h2> : null;

  return (
    <>
      <center>
        <h1>Mobile Phones</h1>
        {/* We can display it */}
        {/* {emptyMessage} */}
        {MobilePhones.length === 0 && <h2>No new Models</h2>}
        <ul className="list-group">
          {MobilePhones.map((mobile) => (
            <li key={mobile} className="list-group-item">
              {mobile}
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}
export default App;
