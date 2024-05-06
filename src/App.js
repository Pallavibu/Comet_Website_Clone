import "./App.css";
import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import Body from "./Components/Body"
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Offer />
      <Navbar/>
      <Body/>
      <Banner/>
    </div>
  );
}

export default App;
