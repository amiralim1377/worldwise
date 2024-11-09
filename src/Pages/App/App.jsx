import "./App.css";
import CitiesCountry from "../../Components/Cities/CitiesCountry";

function App() {
  return (
    <div className="appwrapper">
      <div className="leftwrapper">
        <CitiesCountry />
      </div>
      <div className="rightwrapper"></div>
    </div>
  );
}

export default App;
