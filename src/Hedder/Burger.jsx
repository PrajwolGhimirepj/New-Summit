import { useState } from "react";
import "./Burger.css";

const Burger = ({ isActive, handleRouteChange }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  const go = (route) => {
    handleRouteChange(route);
    setOpen(false); // close menu after click (important UX)
  };

  return (
    <div className="burger-menu">
      <img src="Burger.svg" alt="menu" onClick={toggle} />

      <div className={`dropdown ${open ? "open" : "close"}`}>
        <a
          className={isActive("/events") ? "activeNav" : "notActiveNav"}
          onClick={() => go("Events")}
        >
          Events
        </a>

        <a
          className={isActive("/notices") ? "activeNav" : "notActiveNav"}
          onClick={() => go("Notices")}
        >
          Notices
        </a>

        <a
          className={isActive("/faq") ? "activeNav" : "notActiveNav"}
          onClick={() => go("FAQ")}
        >
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Burger;
