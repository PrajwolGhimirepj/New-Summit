import "./Offer.css";
import useObserve from "../Observer";
import img2 from "./Crop.png";

const Offer = () => {
  const [ref1, View1] = useObserve({ threshold: 0.1 });
  const [ref2, View2] = useObserve({ threshold: 0.1 });
  return (
    <section className="offer-con QuickSand-Regular ">
      <div
        ref={ref1}
        className={`stats-title Neu-Bold" Neu-Bold ${View1 ? "ups" : ""}`}
      >
        <img className="title-img" src="Union.png" alt="" />
        <div>
          <p>What WE</p>
          <p>Offer?</p>
        </div>
      </div>

      {/* Content */}
      <div className="offer-content">
        {/* Left: Points */}
        <div className="offer-points">
          <div className="point-block">
            <h4>Student Success</h4>
            <ul>
              <li>Optimize student support</li>
              <li>Innovative processes to improve retention and learning</li>
              <li>Recruitment and retention of quality faculty and staff</li>
              <li>Provide modern technological support</li>
            </ul>
          </div>

          <div className="point-block ">
            <h4>Innovation</h4>
            <ul>
              <li>Support research and creative activities</li>
              <li>Diversity and inclusion-driven collaboration</li>
              <li>Integrity, transparency, and accountability</li>
            </ul>
          </div>

          <div className="point-block">
            <h4>Collaboration</h4>
            <ul>
              <li>Community and organizational partnerships</li>
              <li>Local, regional, and international engagement</li>
            </ul>
          </div>
        </div>

        {/* Right: Images */}
        <div
          ref={ref2}
          className={`" offer-images Neu-Bold ${View2 ? "ups" : "downs"}`}
        >
          <div className="image-box img1">
            <img src="/Students/dd.jpg" alt="100% Result" />
          </div>
          <div className="image-box img2">
            <img src={img2} alt="Student" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
