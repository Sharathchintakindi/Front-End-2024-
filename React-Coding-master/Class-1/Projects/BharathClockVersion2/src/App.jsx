import ClockSlogan from "./Components/ClockSlogan";
import ClockHeading from "./Components/ClockHeading";
import CurrentTime from "./Components/CurrentTime";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
