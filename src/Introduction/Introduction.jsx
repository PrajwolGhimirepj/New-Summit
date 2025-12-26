import "./Introduction.css";
import "./Animations.css";
import useObserve from "../Observer";
import { useSelector } from "react-redux";

const Introduction = () => {
  const [headRef, headView] = useObserve();
  const [textRef, textView] = useObserve();
  const [btnRef, btnView] = useObserve();
  const widthFromRedux = useSelector((state) => state.width.width);
  const programs = [
    {
      title: "Bachelors in Computer Application (BCA):",
      desc: "Bachelor of Computer Application (BCA) is a next highly demanded program run by NEW SUMMIT College. It is a 4-year / 8-semester program, affiliated to Tribhuvan University, Faculty of....",
      short: "BCA ",
    },
    {
      title: "Bachelor of Business Management (BBMs):",
      desc: "NEW SUMMIT College also runs Bachelohir of Business Management (BBM) Program, which is a 4-year / 8-semester course. It covers 120 credit hours in 4 years. It is designed for aspiring business  ....",
      short: "BBM ",
    },
    {
      title: "Bachelor of Business Studies (BBS):",
      short: "BBS ",
      desc: "Bachelor of Business Studies is a four year degree program conducted by Tribhuvan University, Faculty of Management. It is an annual exam-based program which aims to develop students  ....",
    },
    {
      short: "BBS ",
      title: "Bachelor of Business Studies (BBS):",
      desc: "Bachelor of Business Studies is a four year degree program conducted by Tribhuvan University, Faculty of Management. It is an annual exam-based program which aims to develop students  ....",
    },
  ];
  return (
    <div className="intro font">
      <div className="intro-content">
        <div
          ref={headRef}
          className={`head font-NewTitle ${headView ? "ups" : ""}`}
        >
          <div>
            <p>New Summit</p>
            <p>College</p>
          </div>
          <img src="Logo.png" alt="Logo" />
        </div>

        {/* PARAGRAPH */}
        <p ref={textRef} className={`p ${textView ? "ups" : ""}`}>
          Established in 2064 B.S. by a team of visionary professionals in the
          field of Nepalese academia, NEW SUMMIT College (NSC) has created a
          landmark as one of the best private colleges in Kathmandu,
          specializing in Management, Science and Information Technology streams
          of studies...
        </p>

        <div ref={btnRef} className={`intro-buttons ${btnView ? "ups" : ""}`}>
          {["Mission", "Goals", "Vision"].map((text, index) => (
            <div
              key={text}
              className="apply"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="intro-image">
        <img src="NewSummitCollege.webp" alt="New Summit College" />
      </div>
      <div
        style={{ width: `${widthFromRedux}px` }}
        className="overflowfix-test"
      >
        <p className="program-title">Our Programs {widthFromRedux}</p>{" "}
        {programs.map((item, index) => (
          <div className="program-box" key={index}>
            <div className="program-info">
              <div className="title">
                {" "}
                <div className="title">
                  {widthFromRedux <= 287 ? item.short : item.title}
                </div>
              </div>
              <div className="decc">
                {widthFromRedux <= 187 ? "Viwe in Detail" : item.desc}
              </div>
            </div>
            view
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
