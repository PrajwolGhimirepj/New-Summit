import "./Landing.css";
import "./Animations.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from "../Store/counterSlice.js";

const Landing = () => {
  const parentRef = useRef(null);
  const dispatch = useDispatch();
  const widthFromRedux = useSelector((state) => state.width.width);
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.offsetWidth);
        dispatch(setWidth(parentRef.current.offsetWidth));
      }
    };

    // Set initial width
    updateWidth();

    // Update width on window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="landing QuickSand-Regular">
      <div className="lading-img fadein">
        <img src="Colle.png" alt="" />

        <div className="monolauge Neu-Bold">
          <p>BEST</p>
          <p>EDUCATION</p>
          <div className="img-text">
            <p>AT</p> <img src="Logo.png" alt="" />
          </div>
          <p>NEW SUMMIT</p>
          <div className="apply font">Apply Now</div>
        </div>

        <div ref={parentRef} className="programs">
          {/* With of this container it passed to container on indroduction to flex and manage the our pragrams list to overcome overflow */}
        </div>
      </div>

      <div className="background">
        <img src="Untitled-1.png" alt="" />
      </div>
      <img className="box" src="Untitled-1.svg" alt="" />
    </div>
  );
};

export default Landing;
