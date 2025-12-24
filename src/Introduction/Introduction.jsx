import "./Introduction.css";
import "./Animations.css";
import useObserve from "../Observer";

const Introduction = () => {
  const [ref, View] = useObserve({ threshold: 0.3 });
  const [ref1, View1] = useObserve({ threshold: 0.4 });
  const [ref2, View2] = useObserve({ threshold: 0.4 });
  const [ref3, View3] = useObserve({ threshold: 0.8 });

  return (
    <>
      <div className="intro  font">
        <div className="intro-content">
          <div ref={ref} className={`head font-NewTitle ${View ? "ups" : ""}`}>
            <div>
              <p>New Summit</p>
              <p>College</p>
            </div>
            <img src="Logo.png" alt="" />
          </div>
          <p ref={ref1} className={`p ${View1 ? "ups" : ""}`}>
            Established in 2064 B.S. by a team of visionary professionals in the
            field of Nepalese academia, NEW SUMMIT College (NSC) has created a
            landmark as one of the best private colleges in Kathmandu,
            specializing in Management, Science and Information Technology
            streams of studies. So, NSC offers various TU affiliated programs
            including B.Sc. CSIT, BCA, BBM & BBS. NSC envisions that up-to-date
            knowledge and technology are two of the most indispensable assets
            every student must possess to ...  
          </p>
          <div ref={ref2} className={` intro-buttons ${View2 ? "ups" : ""}`}>
            <div className="apply">Mission</div>{" "}
            <div className="apply">Goals</div>{" "}
            <div className="apply">Vision</div>{" "}
          </div>
        </div>

        <img
          ref={ref3}
          className={` intro-image ${View3 ? "ups" : "down"}`}
          src="NewSummitCollege.webp"
          alt=""
        />
      </div>
    </>
  );
};
export default Introduction;
