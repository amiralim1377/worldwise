import "./Application .css";
import CitiesCountry from "../../Components/CitiesCountry/CitiesCountry";
import Map from "../../Components/Map/Map";
import LogoutApp from "../../Components/LogoutApp/LogoutApp";

function Application() {
  return (
    <div className="appwrapper">
      <div className="leftwrapper">
        <CitiesCountry />
      </div>
      <div className="rightwrapper">
        <LogoutApp />
        <Map />
      </div>
    </div>
  );
}

export default Application;
