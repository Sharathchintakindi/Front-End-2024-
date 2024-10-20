import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/fetchItems";

function App() {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
