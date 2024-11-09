import NavWrapper from "../../Components/NavWrapper/NavWrapper";
import SingUpWrapper from "../../Components/SingUpWrapper/SingUpWrapper";
import "./SingUp.css";
function SingUp() {
  return (
    <div className="singupwrapper">
      <NavWrapper />
      <div className="signupwrapper">
        <SingUpWrapper />
      </div>
    </div>
  );
}

export default SingUp;
