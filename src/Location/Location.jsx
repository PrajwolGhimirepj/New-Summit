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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.155719930531!2d85.34243441454169!3d27.68751290132568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198e8862b41f%3A0xff9481961fde66ce!2sM8QW%2BRXF%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1766765673760!5m2!1sen!2snp"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
