import "./App.css";
import Banner from "./components/Banner";
import Services from "./components/Services";
import ws from "../socketConfig";

function App() {
  return (
    <div>
      <Banner />
      <Services ws={ws} />
    </div>
  );
}

export default App;
