import React from "react";
import "./Faculty.css";
import "../../App/App.css";
import useObserve from "../../Observer";

const Faculty = () => {
  const [ref2, View2] = useObserve({ threshold: 0.1 });
  const facultyMembers = [
    {
      id: 1,
      name: "Full Name",
      degree: "Qulification",
      employment: "Full-Time",
    },
    {
      id: 2,

      name: "Full Name",
      degree: "Qulification",
      employment: "Full-Time",
    },
    {
      id: 3,
      name: "Full Name",
      degree: "Qulification",
      employment: "Full-Time",
    },
    {
      id: 4,
      name: "Full Name",
      degree: "Qulification",
      employment: "Full-Time",
    },
  ];

  return (
    <div className="faculty-container QuickSand-Regular">
      <h2 className={`faculty-title Neu-Bold" Neu-Bold ${View2 ? "ups" : ""}`}>
        Our Faculty
      </h2>
      {/* <div
        ref={ref2}
        className={`stats-title Neu-Bold" Neu-Bold ${View2 ? "ups" : ""}`}
      >
        <img className="title-img" src="Union.png" alt="" />
        <div>
          <p>What WE</p>
          <p>Offer?</p>
        </div>
      </div> */}
      <div className="faculty-grid">
        {facultyMembers.map((member) => (
          <div key={member.id} className="faculty-card">
            <div className="faculty-image"></div>
            <h3 className="faculty-name">{member.name}</h3>
            <p className="faculty-degree">{member.degree}</p>
            <p className="faculty-employment">{member.employment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
