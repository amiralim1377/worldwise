import { useDispatch, useSelector } from "react-redux";
import "./LogoutApp.css";
import { logoutUser } from "../../userSlice/userSlice";
import { useNavigate } from "react-router-dom";
function LogoutApp() {
  const user = useSelector((state) => state?.user?.user[0].email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hanlelogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="loginlogoout">
      <p>welcome,{user}</p>
      <button onClick={hanlelogout}>LOGOUT</button>
    </div>
  );
}

export default LogoutApp;
