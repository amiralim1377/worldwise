import { Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="appwrapper">
      <div className="leftwrapper">
        <Outlet />
      </div>
      <div className="rightwrapper"></div>
    </div>
  );
}

export default App;
