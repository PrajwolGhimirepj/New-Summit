import "./Hedder.css";
import "./Animations.css";
import Burger from "./Burger/Burger.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const Hedder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleRouteChange = (route) => {
    switch (route) {
      case "About":
        navigate("/about");
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
      case "Talents":
        navigate("/talents");
        break;
      case "Events":
        navigate("/events");
        break;
      case "Contact":
        navigate("/contact");
        break;
      case "FAQ":
        navigate("/faq");
        break;
      case "Notices":
        navigate("/notices");
        break;
      default:
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* TOP HEADER */}
      <div className="hedder-con QuickSand-Regular">
        <div className="name-logo">
          <img src="full_logo-768x285 (1).jpg" alt="Logo" />
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
            <span
              className="underScore"
              onClick={() => handleRouteChange("Admissions")}
            >
              Apply Now
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="nav-con font QuickSand-Regular">
        <div className="left-nav">
          <a
            className={isActive("/home") ? "activeNav" : "notActiveNav"}
            onClick={() => handleRouteChange("home")}
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
          <a
            className={isActive("/faculty") ? "activeNav" : "notActiveNav"}
            onClick={() => handleRouteChange("Faculty")}
          >
            Faculty
          </a>
        </div>

        <div className="left-navv">
          <a
            className={isActive("/talents") ? "activeNav" : "notActiveNav"}
            onClick={() => handleRouteChange("Talents")}
          >
            Talents
          </a>

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
            className={isActive("/faq") ? "activeNav" : "notActiveNav"}
            onClick={() => handleRouteChange("FAQ")}
          >
            FAQ
          </a>
        </div>

        <div className="menue">
          <Burger />
        </div>
      </div>
    </>
  );
};

export default Hedder;
