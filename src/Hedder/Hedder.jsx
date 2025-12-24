import "./Hedder.css";
import "./Animations.css";
const Hedder = () => {
  return (
    <>
      <div className="hedder-con small-font">
        <div className="name-logo  ">
          <img src="Logo.png" alt="" />
          <div className="name">
            <p>NEW</p>
            <p>SUMMIT</p>
            <p>College</p>
            <p className="small-font">LEARNERS TO LEADERS</p>
          </div>
        </div>
        <div className="apply-contacts ">
          <p className="underScore">01-4620522/23/24</p>
          <div>
            <p className="underScore">Shantinagar, Tinkune,</p>
            <p className="underScore">Kathmandu, Nepal</p>
          </div>

          <div className="apply">
            <span className="underScore">Apply Now</span>
          </div>
        </div>
      </div>
      <div className="nav-con small-font">
        <div className="left-nav">
          <a href="">About us</a>
          <a href="">Academics</a>
          <a href="">Admissions</a>
        </div>
        <div className="left-nav">
          <a href="">Talents</a>
          <a href="">Events</a>
          <a href="">Contact</a>
          <a href="">Notices</a>
        </div>
      </div>
    </>
  );
};

export default Hedder;
