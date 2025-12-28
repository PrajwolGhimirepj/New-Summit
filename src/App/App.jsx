import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hedder from "../Hedder/Hedder.jsx";
import Landing from "../Landing/Landing.jsx";
import Introduction from "../Introduction/Introduction.jsx";
import Stats from "../Stats/Stats.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Location from "../Location/Location.jsx";
import Explore from "../Explore-more/Explore.jsx";
import Footer from "../Footer/Footer.jsx";
import Faculty from "../Routes/Faculty/Faculty.jsx";
import Offer from "../Offer/Offer.jsx";
const HomePage = () => (
  <>
    <Landing />
    <Introduction />
    <Offer />
    <Stats />

    <Reviews />
    <Location />
    <Explore />
    <Footer />
  </>
);

const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Scroll-based navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setIsNavVisible(true);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 50)
        setIsNavVisible(false);
      else if (currentScroll < lastScroll) setIsNavVisible(true);

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="app">
      <div
        className="hedder-nav"
        style={{
          transform: isNavVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Hedder />
      </div>

      <div className="main-content QuickSand-Regular">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route
            path="/admissions"
            element={<div className="error">Page not found</div>}
          />
          <Route
            path="/academics"
            element={<div className="error">Page not found</div>}
          />
          <Route
            path="*"
            element={<div className="error">Page not found</div>}
          />
        </Routes>
      </div>
    </div>
  );
};

// Wrap App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
