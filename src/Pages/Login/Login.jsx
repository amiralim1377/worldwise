import LoginWrapper from "../../Components/Loginwrapper/LoginWrapper";
import NavWrapper from "../../Components/NavWrapper/NavWrapper";
import "./Login.css";

function Login() {
  return (
    <div className="logincontainer">
      <NavWrapper />
      <div className="loginwrapper">
        <LoginWrapper />
      </div>
    </div>
  );
}

export default Login;
