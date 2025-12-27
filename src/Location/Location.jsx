import "./Location.css";

const Location = () => {
  return (
    <>
      <div className="location-con">
        <div className="loc-title QuickSand-Bold">
          <div className="bold">We Are</div>

          <div className="bold">
            Located
            <br />
            <div className="address ">
              at
              <p>
                Santinagar <br />
                Kathmandu
              </p>
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
