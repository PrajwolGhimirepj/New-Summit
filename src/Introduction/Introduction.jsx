import "./Introduction.css";
import "./Animations.css";
import useObserve from "../Observer";
import { useSelector } from "react-redux";
import { useState } from "react";

const Introduction = () => {
  const [headRef, headView] = useObserve();
  const [textRef, textView] = useObserve();
  const [btnRef, btnView] = useObserve();

  const [activeSection, setActiveSection] = useState("Goals");

  const widthFromRedux = useSelector((state) => state.width.width);

  const programs = [
    {
      title: "Bachelors in Computer Application (BCA):",
      desc: "Bachelor of Computer Application (BCA) is a next highly demanded program run by NEW SUMMIT College. It is a 4-year / 8-semester program, affiliated to Tribhuvan University, Faculty of....",
      short: "BCA",
    },
    {
      title: "Bachelor of Business Management (BBMs):",
      desc: "NEW SUMMIT College also runs Bachelor of Business Management (BBM) Program, which is a 4-year / 8-semester course. It covers 120 credit hours in 4 years. It is designed for aspiring business....",
      short: "BBM",
    },
    {
      title: "Bachelor of Business Studies (BBS):",
      desc: "Bachelor of Business Studies is a four year degree program conducted by Tribhuvan University, Faculty of Management. It is an annual exam-based program which aims to develop students....",
      short: "BBS",
    },
    {
      title: "Bachelors of Science in (B.Sc.CSIT):",
      desc: "The Bachelor of Science in Computer Science and Information Technology (BSc.CSIT), is a 4-year/8-semester course, designed to provide the students with all sorts of knowledge and skills in the fields of Information Technology and Computing. The program involves, in addition to conventional lectures, a great deal of  ",
      short: "CSIT",
    },
  ];

  return (
    <div className="intro QuickSand-Regular">
      <div className="intro-content">
        {/* <div className="porgrams-small-con">
          <div className="QuickSand-Bold">Our Programs</div>
          <div className="programs-small">
            {["BCA", "BBS", "CSIT"].map((item) => (
              <div key={item} className="programs-dot">
                {item}
              </div>
            ))}
          </div>
        </div> */}

        <div ref={headRef} className={`head Neu-Bold ${headView ? "ups" : ""}`}>
          <div>
            <p>New Summit</p>
            <p>College</p>
          </div>
          <img src="Logo.png" alt="Logo" />
        </div>

        <p ref={textRef} className={`p ${textView ? "ups" : ""}`}>
          Established in 2064 B.S. by a team of visionary professionals in the
          field of Nepalese academia, NEW SUMMIT College (NSC) has created a
          landmark as one of the best private colleges in Kathmandu,
          specializing in Management, Science and Information Technology streams
          of studies...
        </p>

        {/* Goals Section */}
        <div
          ref={btnRef}
          className={`intro-buttons QuickSand-Bold ${btnView ? "ups" : ""}`}
        >
          {["Goals", "Mission", "Vision"].map((item, index) => (
            <div
              key={item}
              className={`apply ${activeSection === item ? "active-btn" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="section-content">
          {activeSection === "Goals" && (
            <div className="section fade-scale">
              Goal 1: Known as a college of academic excellence in
              teaching-learning and extra-curricular activities in the fields of
              Management and IT. Goal 2: Structurally support and value
              collaboration, research, interdisciplinarity and curricular
              flexibility. Goal 3: Become a model for student success,
              engagement and well-being. Goal 4: Increase enrollment and student
              retention and job placement. Goal 5: Enhance infrastructure to
              meet workforce needs.
            </div>
          )}

          {activeSection === "Mission" && (
            <div className="section fade-scale">
              Provide affordable quality education while equipping students with
              knowledge, skills and values in their chosen programs. Develop
              future leaders, entrepreneurs, IT developers and innovators.
              Instill social responsibility and empower students to become job
              creators.
            </div>
          )}

          {activeSection === "Vision" && (
            <div className="section fade-scale">
              Become an excellent educational institution in Nepal in the fields
              of IT, Management, Science and Social Sciences for socio-economic
              transformation.
            </div>
          )}
        </div>
      </div>

      <div className="intro-image">
        <img src="NewSummitCollege.webp" alt="New Summit College" />
      </div>

      {/* Our Programs */}

      <div
        className="overflowfix-test "
        style={{ width: `${widthFromRedux}px` }}
      >
        <p className="program-title">Our Programs</p>
        {programs.map((item, index) => (
          <div
            key={index}
            className="program-box"
            style={{
              justifyContent: widthFromRedux <= 187 ? "center" : "flex-start",
              alignItems: widthFromRedux <= 187 ? "center" : "flex-start",
              width: widthFromRedux <= 187 ? "max-content" : "100%",
              height: widthFromRedux <= 187 ? "max-content" : "150px",
              padding: "10px",
            }}
          >
            <div className="program-info">
              <div
                className="title"
                style={{
                  fontSize:
                    widthFromRedux <= 287
                      ? "18px"
                      : widthFromRedux <= 388
                      ? "12px"
                      : "18px",
                }}
              >
                {widthFromRedux <= 287 ? item.short : item.title}
              </div>

              {widthFromRedux > 187 && <div className="decc">{item.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
