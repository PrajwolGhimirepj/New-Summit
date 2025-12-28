import React from "react";
import "./Faculty.css";
import "../../App/App.css";

import Explore from "../../Explore-more/Explore.jsx";
const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Parichaya aadhikari",
      degree: "Masters in CS",
      employment: "Full-Time",
    },
    {
      id: 2,
      name: "Parichaya aadhikari",
      degree: "Masters in CS",
      employment: "Full-Time",
    },
    {
      id: 3,
      name: "Parichaya aadhikari",
      degree: "Masters in CS",
      employment: "Full-Time",
    },
    {
      id: 4,
      name: "Parichaya aadhikari",
      degree: "Masters in CS",
      employment: "Full-Time",
    },
  ];

  return (
    <div className="faculty-container QuickSand-Regular">
      <h2 className="faculty-title Neu-Bold ">Our Faculty</h2>

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
