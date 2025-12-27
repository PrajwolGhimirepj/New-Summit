import "./Stats.css";
import useObserve from "../Observer";

const statsData = [
  {
    img: "./Icons/book.png",
    value: "1,000+",
    line1: "Students in",
    line2: "Bachelor",
  },
  {
    img: "./Icons/grad.png",
    value: "4",
    line1: "Bachelor",
    line2: "Programs",
  },
  {
    img: "./Icons/Learning.png",
    value: "1:16",
    line1: "Student-To",
    line2: "Faculty Ratio",
  },
  {
    img: "./Icons/Together.png",
    value: "50+",
    line1: "Industrial",
    line2: "Partners",
  },
];

const Stats = () => {
  const [ref, View] = useObserve({ threshold: 0.4 });
  const [ref1, View1] = useObserve({ threshold: 0.5 });
  const [ref2, View2] = useObserve({ threshold: 0.5 });

  return (
    <div className="stats-container QuickSand-Regular">
      <h3 className="stats-title Neu-Bold">WHY NEW SUMMIT ?</h3>

      <div className="icons">
        {statsData.map((item, index) => (
          <div
            key={index}
            ref={ref2}
            style={{ animationDelay: `${index * 150}ms` }}
            className={` icon ${View2 ? "up" : "out"}`}
          >
            <img src={item.img} alt={item.line1} />
            <div className="dec">
              <p className="stat-value">{item.value}</p>
              <p>{item.line1}</p>
              <p>{item.line2}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img
          ref={ref}
          className={`side ${View ? "toright" : "backr"}`}
          src="Side.png"
          alt=""
        />
        <img
          ref={ref1}
          className={`side-r ${View1 ? "toleft" : "backl"}`}
          src="slider-r.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Stats;
