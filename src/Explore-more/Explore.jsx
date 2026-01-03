import React from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

const Explore = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 1, title: "Faculty", route: "/faculty" },
    { id: 2, title: "Gallery", route: "/gallery" },
    { id: 3, title: "Contacts", route: "/" },
    { id: 4, title: "FAQ", route: "/" },
  ];

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="explore-container QuickSand-Regular">
      <h1 className="explore-title Neu-Bold">Explore More...</h1>
      <div className="nav-buttons">
        {navItems.map((item) => (
          <a
            key={item.id}
            onClick={() => handleNavigation(item.route)}
            className="apply QuickSand-Bold"
          >
            {item.title}
          </a>
        ))}
      </div>
      Repo :
      <a
        target="_blank"
        rel="noreferrer  noopener"
        href="https://github.com/PrajwolGhimirepj/New-Summit"
      >
        https://github.com/PrajwolGhimirepj/New-Summit
      </a>
    </div>
  );
};

export default Explore;
