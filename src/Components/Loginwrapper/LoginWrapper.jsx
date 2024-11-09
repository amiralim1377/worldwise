import { useNavigate } from "react-router-dom";
import "./LoginWrapper.css";
function LoginWrapper() {
  const navigate = useNavigate();
  return (
    <form action="" className="formwrapper">
      <div className="emailwrapper">
        <p>Email address</p>
        <input type="text" placeholder="ABC@gmail.com" />
      </div>
      <div className="passwordpass">
        <p>Password</p>
        <input type="password" />
      </div>
      <div className="btnloginwrapper">
        <button className="button-37" role="button">
          Login
        </button>
        <button
          onClick={() => navigate("/singup")}
          className="button-38"
          role="button"
        >
          SING UP
        </button>
      </div>
    </form>
  );
}

export default LoginWrapper;
