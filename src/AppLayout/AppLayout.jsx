import { Outlet } from "react-router-dom";
import "./AppLayout.css";
function AppLayout() {
  return (
    <div className="AppLayoutwrapper">
      <Outlet />
    </div>
  );
}

export default AppLayout;
