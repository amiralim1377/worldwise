import { useDispatch } from "react-redux";
import "./CitiesItem.css";
import { deleteTrip } from "../../tripSlice/tripSlice";

function CitiesItem({ cityitem }) {
  const dispatch = useDispatch();

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
        <button onClick={() => handledeletecity(cityitem.id)}>❌</button>
      </div>
    </li>
  );
}

export default CitiesItem;
