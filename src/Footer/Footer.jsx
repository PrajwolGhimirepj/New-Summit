import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer font QuickSand-Regular">
      <div className="footer-left">
        <div className="logo-placeholder">
          <img src="full_logo-768x285 (1).jpg" alt="" />
        </div>
      </div>
      <div className="footer-right">
        <p>Shantinagar, New Baneshwor</p>
        <p>01-4620522, 4620523, 4620524</p>
        <p>info.plus2@newsummit.edu.np</p>
        <p>www.plus2.newsummit.edu.np</p>
      </div>
      <div className="Socials">
        <p>Socials</p>
        <div className="Social-icons">
          {" "}
          <div className="Social-icon">
            <img src="./Social/Facebook.svg" alt="" />
          </div>
          <div className="Social-icon">
            <img src="./Social/Instagram.svg" alt="" />
          </div>
          <div className="Social-icon">
            <img src="./Social/Tiktok.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="Socials">
        <p>Important Links</p>
        <div className="Social-icons">
          <div className="Social-icon"></div>
          <div className="Social-icon"></div>
          <div className="Social-icon"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
