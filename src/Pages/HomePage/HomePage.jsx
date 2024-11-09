import { useNavigate } from "react-router-dom";
import NavWrapper from "../../Components/NavWrapper/NavWrapper";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepagewrapper">
      <NavWrapper />
      <div className="homepagetextwrapper">
        <p>
          You travel the world.
          <br /> WorldWise keeps track of your adventures.
        </p>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful
          <br />
          experiences and show your friends how you have wandered the world.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="button-3"
          role="button"
        >
          START TRACKING NOW
        </button>
      </div>
    </div>
  );
}

export default HomePage;
