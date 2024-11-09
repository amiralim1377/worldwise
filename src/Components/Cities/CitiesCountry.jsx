import { Outlet, useNavigate } from "react-router-dom";
import "./CitiesCountry.css";
function CitiesCountry() {
  const navigate = useNavigate();
  return (
    <div className="citieswrapper">
      <div className="citieslogowrapper">
        <img src="/public/images/logo.png" alt="" />
      </div>
      <div className="citiesbtnwrapper">
        <button onClick={() => navigate("cities")}>CITIES</button>
        <button onClick={() => navigate("countries")}>COUNTRIES</button>
      </div>
      <Outlet />
    </div>
  );
}

export default CitiesCountry;
