import "./Location.css";
import useObserve from "../Observer";

const Location = () => {
  const [ref3, View3] = useObserve({ threshold: 0.5 });
  const [ref4, View4] = useObserve({ threshold: 0.5 });
  return (
    <>
      <div className="location-con">
        <div className="loc-title QuickSand-Bold">
          {/* <div className="bold">We Are</div> */}
          <div ref={ref3} className={`  Neu-Bold ${View3 ? "ups" : ""}`}>
            <div className="title-text">
              <p>WE ARE </p>
              <p>Located At</p>
              <p>Santiagar,Kathmandu</p>
            </div>
            {/* <img src="Logo.png" alt="Logo" /> */}
          </div>
          <div
            ref={ref4}
            className={`cta stats-title Neu-Bold ${View4 ? "ups" : ""}`}
          >
            <div className="contact cat1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
              </svg>
              <p> 01-4620522/23/24</p>{" "}
            </div>
            <div className="contact cat1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z" />
              </svg>
              <p> info@newsummit.edu.np</p>{" "}
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1679.0854472075705!2d85.3422487!3d27.6870195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199ea74f327d%3A0xea78ffa3ca66c187!2sNew%20Summit%20College!5e1!3m2!1sen!2snp!4v1766835824225!5m2!1sen!2snp"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
