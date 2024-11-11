import { useSelector } from "react-redux";

function Countries() {
  const isAddedTrip = useSelector((state) => state.trip.isAddedTrip);
  if (!isAddedTrip)
    return (
      <div className="citiesError">
        👋 Add your first city by clicking on a city on the map
      </div>
    );
  return <div>countries</div>;
}

export default Countries;
