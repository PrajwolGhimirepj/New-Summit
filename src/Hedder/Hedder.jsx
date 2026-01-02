import "./Hedder.css";
import "./Animations.css";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Hedder = () => {
  const navigate = useNavigate();

  const handleRouteChange = (route) => {
    switch (route) {
      case "Admissions":
        navigate("/admissions");
        break;
      default:
        navigate("/");
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

      <Navigation />
    </>
  );
};

export default Hedder;
