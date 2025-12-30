import "./GalleryDis.css";
import "./Animation.css";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

const GalleryDis = () => {
  return (
    <>
      <section className="gallaryDis-con QuickSand-Regular">
        <div className="View-btn  QuickSand-Bold ">View Gallery</div>
        <img
          style={{ animationDelay: "0s" }}
          className="photo1 float"
          // src={img1}
          alt=""
        />
        <img
          style={{ animationDelay: "0.5s" }}
          className="photo2 float "
          // src={img2}
          alt=""
        />{" "}
        <img
          style={{ animationDelay: "1s" }}
          className="photo3 float"
          // src={img3}
          alt=""
        />
      </section>
    </>
  );
};

export default GalleryDis;
