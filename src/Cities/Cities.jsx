import { useSelector } from "react-redux";
import CitiesItem from "../Components/CitiesItem/CitiesItem";
import "./Cities.css";

function Cities() {
  const cities = useSelector((state) => state?.trip?.alltrip);
  const isAddedTrip = useSelector((state) => state.trip.isAddedTrip);

  if (!isAddedTrip || !cities)
    return (
      <div className="citiesError">
        👋 Add your first city by clicking on a city on the map
      </div>
    );

  return (
    <ul className="citiesitemwrapper">
      {cities.map((cityitem) => (
        <CitiesItem cityitem={cityitem} key={cityitem.id} />
      ))}
    </ul>
  );
}

export default Cities;
