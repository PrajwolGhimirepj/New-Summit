import "./Reviews.css";
import { useRef } from "react";
import useObserve from "../Observer";

const reviewsData = [
  {
    firstName: "Dikshya",
    lastName: "Sigdel",
    review:
      "The BCA program at New Summit College helped me build a strong foundation in programming and problem-solving. The faculty members are supportive and always encourage practical learning.",
  },
  {
    firstName: "Prajwol",
    lastName: "Ghimire",
    review:
      "New Summit College provides a balanced mix of theory and practical exposure. The learning environment is friendly, and the labs helped me gain real-world development skills.",
  },
  {
    firstName: "Prashansha",
    lastName: "Adhikari",
    review:
      "I really appreciate the guidance from the teachers and the collaborative environment among students. The BCA curriculum is well-structured and industry-focused.",
  },
  {
    firstName: "Dikshya",
    lastName: "Sigdel",
    review:
      "The BCA program at New Summit College helped me build a strong foundation in programming and problem-solving. The faculty members are supportive and always encourage practical learning.",
  },
];

const Reviews = () => {
  const refs = useRef([]);

  // create one observer PER ITEM
  const views = reviewsData.map(
    (_, i) => useObserve({ threshold: 1 }) // 👈 allowed because list length is static
  );

  return (
    <div className="review-container font">
      <h2 className="stats-title">What Our Students Say</h2>

      <div className="reviews">
        {reviewsData.map((item, index) => {
          const [ref, View] = views[index];

          return (
            <div key={index} ref={ref} className="riv">
              <div className="name-rev">
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
                <p className="rev-dec">{item.review}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="review-actions">
        <div className="apply">Submit a Review</div>
        <div className="apply">More</div>
      </div>
    </div>
  );
};

export default Reviews;
