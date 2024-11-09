import "./CitiesItem.css";

function CitiesItem() {
  return (
    <ul className="citiesitemwrapper">
      <li className="citiescontainer">
        <div className="iconcitiesname">
          <p>Es</p>
          <p>Getafe</p>
        </div>
        <div className="datebuttonname">
          <p>(november 9,2024)</p>
          <button>❌</button>
        </div>
      </li>
    </ul>
  );
}

export default CitiesItem;
