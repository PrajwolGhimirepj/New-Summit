import React from "react";
import "./Reviews.css";

const Review = () => {
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
      firstName: "Prajina",
      lastName: "Shrestha",
      review:
        "The BCA program at New Summit College helped me build a strong foundation in programming and problem-solving. The faculty members are supportive and always encourage practical learning.",
    },
  ];

  return (
    <div className="review-container QuickSand-Regular">
      <h2 className="review-title Neu-Bold ">
        What Our <br /> Students Say?
      </h2>

      <div className="review-grid">
        {reviewsData.map((item, index) => {
          return (
            <div key={index} className="review-card ">
              <img src="Default.jpg" alt="" />
              <div className="review-txt">
                <div className="name-rev  QuickSand-Bold">
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                  <p className="rev-dec QuickSand-Regular">{item.review}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="deco-right">
        <img className="right-img" src="SIde-Summit.svg" alt="" />
        <img className="left-img" src="SIde-Summit.svg" alt="" />
      </div>
    </div>
  );
};

export default Review;
