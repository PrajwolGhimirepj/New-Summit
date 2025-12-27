import { useState } from "react";
import "./Burger.css";
import { useNavigate } from "react-router-dom";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setOpen((prev) => !prev);
  };

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
      default:
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false); // Close menu after clicking
  };

  return (
    <div className="burger-menu">
      <img src="Burger.svg" alt="menu" onClick={toggle} />

      <div className={`dropdown ${open ? "open" : "close"}`}>
        <a onClick={() => handleRouteChange("Talents")}>Talents</a>
        <a onClick={() => handleRouteChange("Events")}>Events</a>
        <a onClick={() => handleRouteChange("Contact")}>Contact</a>
        <a onClick={() => handleRouteChange("FAQ")}>FAQ</a>
        <a onClick={() => handleRouteChange("Faculty")}>Faculty</a>
        <a onClick={() => handleRouteChange("Notices")}>Notices</a>
      </div>
    </div>
  );
};

export default Burger;
