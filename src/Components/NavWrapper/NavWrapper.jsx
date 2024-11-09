import { Link, useNavigate } from "react-router-dom";
import "./NavWrapper.css";

function NavWrapper() {
  const navigate = useNavigate();
  return (
    <div className="NavWrapper">
      <div className="logowrapper">
        <Link to="/">
          <img src="/public/images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="navwrapperlink">
        <button
          onClick={() => navigate("/pricing")}
          className="firstsecondbutton"
        >
          PRICING
        </button>
        <button
          onClick={() => navigate("/product")}
          className="firstsecondbutton"
        >
          PRODUCT
        </button>
        <button
          onClick={() => navigate("/login")}
          className="button-4"
          role="button"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default NavWrapper;
