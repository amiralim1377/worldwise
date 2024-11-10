import "./App.css";
import CitiesCountry from "../../Components/Cities/CitiesCountry";
import Map from "../../Components/Map/Map";

function App() {
  return (
    <div className="appwrapper">
      <div className="leftwrapper">
        <CitiesCountry />
      </div>
      <div className="rightwrapper">
        <Map />
      </div>
    </div>
  );
}

export default App;
