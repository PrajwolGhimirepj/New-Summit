import "./Introduction.css";
import "./Animations.css";
import useObserve from "../Observer";

const Introduction = () => {
  const [headRef, headView] = useObserve();
  const [textRef, textView] = useObserve();
  const [btnRef, btnView] = useObserve();

  return (
    <div className="intro font">
      <div className="intro-content">
        {/* TITLE */}
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

        {/* STAGGER BUTTONS */}
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

      {/* IMAGE */}
      <img
        className="intro-image"
        src="NewSummitCollege.webp"
        alt="New Summit College"
      />
    </div>
  );
};

export default Introduction;
