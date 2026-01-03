import "./Admissions.css";
import image from "./Group.png";

const Admissions = ({ selectedProgram }) => {
  return (
    <div className="admission-overlay  QuickSand-Regular">
      <div className="admission-modal">
        <span className="close-btn">×</span>

        <div className="admission-left Neu-Bold">
          <h2>
            APPLY FOR <br />
            ADMISSION - 2026 SESSION.
          </h2>

          <div className="form-grid QuickSand-Regular">
            <input
              className="QuickSand-Regular"
              type="text"
              placeholder="Name:"
            />
            <input
              className="QuickSand-Regular"
              type="email"
              placeholder="Email:"
            />
            <input
              className="QuickSand-Regular"
              type="text"
              placeholder="Address:"
            />
            <input
              className="QuickSand-Regular"
              type="text"
              placeholder="Phone Number:"
            />
          </div>

          <input
            className="QuickSand-Regular"
            type="text"
            placeholder="Program you want to enroll in :"
            value={selectedProgram}
          />

          <textarea className="QuickSand-Regular" placeholder="Any queries ?" />

          <button className="apply QuickSand-Bold ">Apply</button>
        </div>

        {/* RIGHT */}
        <div className="admission-right">
          <img src={image} alt="" />
        </div>
      </div>
      <img className="bgImg-summmit-admission" src="Group 21.png" alt="" />
    </div>
  );
};

export default Admissions;
