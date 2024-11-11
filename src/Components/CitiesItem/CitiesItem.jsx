import "./CitiesItem.css";

function CitiesItem({ cityitem }) {
  return (
    <li className="citiescontainer">
      <div className="iconcitiesname">
        <p>{cityitem?.city}</p>
      </div>
      <div className="datebuttonname">
        <p>{`(${cityitem?.date})`}</p>
        <button>❌</button>
      </div>
    </li>
  );
}

export default CitiesItem;
