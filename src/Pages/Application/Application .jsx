import "./Application .css";
import CitiesCountry from "../../Components/CitiesCountry/CitiesCountry";
import Map from "../../Components/Map/Map";

function Application() {
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

export default Application;
