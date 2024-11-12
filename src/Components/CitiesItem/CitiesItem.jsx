import { useDispatch } from "react-redux";
import "./CitiesItem.css";
import { deleteTrip, setSelectedCity } from "../../tripSlice/tripSlice";

function CitiesItem({ cityitem }) {
  const dispatch = useDispatch();

  const cityClickHandler = (city) => {
    dispatch(setSelectedCity(city));
  };

  const handledeletecity = (id) => {
    dispatch(deleteTrip(id));
  };

  return (
    <li className="citiescontainer">
      <div className="iconcitiesname">
        <p>{cityitem?.city}</p>
      </div>
      <div className="datebuttonname">
        <p>{`(${cityitem?.date})`}</p>
        <button onClick={() => cityClickHandler(cityitem)}>set view</button>
        <button onClick={() => handledeletecity(cityitem.id)}>❌</button>
      </div>
    </li>
  );
}

export default CitiesItem;
