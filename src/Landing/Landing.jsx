import "./Landing.css";
import "./Animations.css";

const Landing = () => {
  return (
    <>
      <div className="landing font">
        <div className="lading-img fade">
          <img src="Colle.png" alt="" />
          <div className="monolauge font-NewTitle">
            <p>BEST</p>
            <p>EDUCATION</p>
            <div className="img-text">
              <p>AT</p> <img src="Logo.png" alt="" />
            </div>
            <p>NEW SUMMIT </p>
            <div className="apply font">Apply Now</div>
          </div>
          <div className="programs">
            <p>Our Programs</p>
            <div className="program-box"></div>
            <div className="program-box"></div>
            <div className="program-box"></div>
          </div>
        </div>

        {/* <div className="background">
          <img src="Untitled-1.png" alt="" />
        </div>
        <img className="box" src="Untitled-1.svg" alt="" /> */}
      </div>
    </>
  );
};

export default Landing;
