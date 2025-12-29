import { useState } from "react";
import "./Academics.css";

const academicsData = {
  BCA: {
    title: "Bachelor in Computer Application (BCA)",
    description:
      "BCA is a four-year undergraduate program focused on computer applications, software development, and IT fundamentals.",
    prospects: [
      "Software Developer / Engineer",
      "Web Developer",
      "System Administrator",
      "Mobile App Developer",
      "UI/UX Designer",
      "IT Support Specialist",
    ],
    scope: [
      "Strong foundation in programming and software development",
      "Opportunities in IT companies and startups",
      "Eligibility for MCA, MIT, or MSc IT",
      "Good base for freelancing and entrepreneurship",
    ],
    fees: "Approx. NPR 4,00,000 – 6,00,000 (entire course)",
    scholarship: "Merit-based and need-based scholarships available",
  },

  CSIT: {
    title: "BSc Computer Science and Information Technology (CSIT)",
    description:
      "CSIT is a four-year program combining computer science theory with practical IT skills.",
    prospects: [
      "Software Engineer",
      "Data Analyst",
      "Network Engineer",
      "AI / ML Engineer",
      "Cyber Security Analyst",
      "Research Assistant",
    ],
    scope: [
      "Strong mathematical and theoretical base",
      "Careers in research and development",
      "High demand in software industries",
      "Pathway to MSc CS, AI, or Data Science",
    ],
    fees: "Approx. NPR 5,00,000 – 7,00,000 (entire course)",
    scholarship: "Entrance-topper and semester-wise scholarships",
  },

  BBM: {
    title: "Bachelor of Business Management(BBM)",
    description:
      "BHM is a four-year professional program focused on hospitality, hotel operations, and management skills.",
    prospects: [
      "Hotel Manager",
      "Food & Beverage Manager",
      "Front Office Executive",
      "Event Manager",
      "Cruise Line Staff",
      "Entrepreneur in Hospitality",
    ],
    scope: [
      "Global job opportunities",
      "High demand in tourism industry",
      "Hands-on practical exposure",
      "Opportunities in hotels, resorts, airlines",
    ],
    fees: "Approx. NPR 6,00,000 – 8,00,000 (entire course)",
    scholarship: "Performance-based scholarships available",
  },

  BBS: {
    title: "Bachelor of Business Studies (BBS)",
    description:
      "BBS is a four-year undergraduate program focused on business, finance, accounting, and management.",
    prospects: [
      "Accountant",
      "Banking Officer",
      "Business Analyst",
      "Marketing Executive",
      "Entrepreneur",
      "HR Officer",
    ],
    scope: [
      "Strong foundation in business and commerce",
      "Preparation for MBA and MBS",
      "Careers in banking and finance",
      "Suitable for business startups",
    ],
    fees: "Approx. NPR 3,00,000 – 4,50,000 (entire course)",
    scholarship: "Need-based and merit-based scholarships",
  },
};

const Academics = () => {
  const [activeProgram, setActiveProgram] = useState("BCA");

  const program = academicsData[activeProgram];

  return (
    <div className="academics-con QuickSand-Regular">
      {/* NAV */}
      <div className="academics-nav ">
        {Object.keys(academicsData).map((key) => (
          <button
            key={key}
            className={
              activeProgram === key
                ? "  active  QuickSand-Regular"
                : " notactive  QuickSand-Regular "
            }
            onClick={() => setActiveProgram(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="academics-details">
        {/* LEFT */}
        <div className="details-left">
          <h2>{program.title}</h2>
          <p className="description">{program.description}</p>

          <h3>Prospects</h3>
          <ul>
            {program.prospects.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Scope</h3>
          <ul>
            {program.scope.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="actions ">
            <button className="apply QuickSand-Bold">Apply</button>
            <button className="apply QuickSand-Bold">Contacts</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="details-right">
          <h3>Fee Structure</h3>
          <div className="fee-box">
            <p>{program.fees}</p>
          </div>

          <p className="scholarship">
            <strong>Scholarships:</strong> {program.scholarship}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
