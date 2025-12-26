import react, { useState, useEffect } from "react";
import "./App.css";
import Hedder from "../Hedder/Hedder.jsx";
import Landing from "../Landing/Landing.jsx";
import Introduction from "../Introduction/Introduction.jsx";
import Stats from "../Stats/Stats.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Location from "../Location/Location.jsx";
import Footer from "../Footer/Footer.jsx";

const App = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setIsNavVisible(true);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Scrolling down & past threshold
        setIsNavVisible(false);
      } else if (currentScroll < lastScroll) {
        // Scrolling up
        setIsNavVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
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
        <Landing />
        <Introduction />
        <Stats />
        <Reviews />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default App;
