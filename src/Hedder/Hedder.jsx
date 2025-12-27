import "./Hedder.css";
import "./Animations.css";
import Burger from "./Burger/Burger.jsx";
import { useNavigate } from "react-router-dom";

const Hedder = () => {
  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    switch (route) {
      case "Faculty":
        navigate("/faculty");
        break;
      case "Admissions":
        navigate("/admissions");
        break;
      case "Academics":
        navigate("/academics");
        break;
      // Add more routes as needed
      default:
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    }
  };

  return (
    <>
      <div className="hedder-con QuickSand-Regular">
        <div className="name-logo">
          <img src="full_logo-768x285 (1).jpg" alt="" />
        </div>
        <div className="apply-contacts">
          <div className="contacts">
            <p className="underScore">01-4620522/23/24</p>
            <div>
              <p className="underScore">Shantinagar, Tinkune,</p>
              <p className="underScore">Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="apply QuickSand-Bold">
            <span className="underScore">Apply Now</span>
          </div>
        </div>
      </div>
      <div className="nav-con font QuickSand-Regular">
        <div className="left-nav">
          <a onClick={() => handleRouteChange("About us")}>About us</a>
          <a onClick={() => handleRouteChange("Academics")}>Academics</a>
          <a onClick={() => handleRouteChange("Admissions")}>Admissions</a>
        </div>
        <div className="left-navv">
          <a onClick={() => handleRouteChange("Talents")}>Talents</a>
          <a onClick={() => handleRouteChange("Events")}>Events</a>
          <a onClick={() => handleRouteChange("Contact")}>Contact</a>
          <a onClick={() => handleRouteChange("FAQ")}>FAQ</a>
          <a onClick={() => handleRouteChange("Faculty")}>Faculty</a>
          <a onClick={() => handleRouteChange("Notices")}>Notices</a>
        </div>
        <div className="menue">
          <Burger />
        </div>
      </div>
    </>
  );
};

export default Hedder;
