import { useNavigate, useLocation } from "react-router-dom";
import "./Hedder.css";
import "./Animations.css";
import Burger from "./Burger.jsx";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleRouteChange = (route) => {
    switch (route) {
      case "About":
        navigate("/");
        break;
      case "Academics":
        navigate("/academics");
        break;
      case "Admissions":
        navigate("/admissions");
        break;
      case "Faculty":
        navigate("/faculty");
        break;
      case "Events":
        navigate("/events");
        break;
      case "Notices":
        navigate("/notices");
        break;
      case "Gallery":
        navigate("/gallery");
        break;

      default:
        navigate("/");
    }
  };

  return (
    <div className="nav-con font QuickSand-Regular">
      <div className="left-nav">
        <a
          className={isActive("/") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("About")}
        >
          About us
        </a>

        <a
          className={isActive("/academics") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("Academics")}
        >
          Academics
        </a>

        <a
          className={isActive("/admissions") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("Admissions")}
        >
          Admissions
        </a>
      </div>

      <div className="left-navv small">
        <a
          className={isActive("/events") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("Events")}
        >
          Events
        </a>

        <a
          className={isActive("/notices") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("Notices")}
        >
          Notices
        </a>
        <a
          className={isActive("/faculty") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("Faculty")}
        >
          Faculty
        </a>
        <a
          className={isActive("/gallery") ? "activeNav" : "notActiveNav"}
          onClick={() => handleRouteChange("Gallery")}
        >
          Gallery
        </a>
      </div>

      <div className="menue">
        <Burger isActive={isActive} handleRouteChange={handleRouteChange} />
      </div>
    </div>
  );
};

export default Navigation;
