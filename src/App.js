import "./App.css";
import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import Body from "./Components/Body"

function App() {
  return (
    <div className="App">
      <Offer />
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
