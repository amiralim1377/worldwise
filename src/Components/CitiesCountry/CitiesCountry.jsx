import { Link, NavLink, Outlet } from "react-router-dom";
import "./CitiesCountry.css";
function CitiesCountry() {
  return (
    <div className="citieswrapper">
      <div className="citieslogowrapper">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/amiralim1377/worldwise/refs/heads/main/public/images/logo.png"
            alt="worldwise"
          />
        </Link>
      </div>
      <div className="citiesbtnwrapper">
        <NavLink
          className={({ isActive }) => (isActive ? "activ-link" : "")}
          to="cities"
        >
          <button>CITIES</button>
        </NavLink>
      </div>
      <div className="outletwrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default CitiesCountry;
