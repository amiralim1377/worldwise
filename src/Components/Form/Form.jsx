import "./Form.css";
function Form() {
  return (
    <div className="formwrapper">
      <div className="cityname">
        <label htmlFor="" className="labelform">
          City name
        </label>
        <input type="text" />
      </div>
      <div className="dataofadventur">
        <label htmlFor="">When did you go to Hontoba?</label>
        <input type="text" />
      </div>
      <div className="noteofadventur">
        <label htmlFor="">Notes about your trip to Hontoba</label>
        <input type="text" name="" id="" />
      </div>
      <div className="formbtn">
        <button>Add</button>
        <button>Back</button>
      </div>
    </div>
  );
}

export default Form;
