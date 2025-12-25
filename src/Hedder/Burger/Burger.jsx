import { useState } from "react";
import "./Burger.css";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="burger-menu">
      <img src="Burger.svg" alt="menu" onClick={toggle} />

      <div className={`dropdown ${open ? "open" : "close"}`}>
        <a href="">Talents</a>
        <a href="">Events</a>
        <a href="">Contact</a>
        <a href="">Notices</a>
      </div>
    </div>
  );
};

export default Burger;
