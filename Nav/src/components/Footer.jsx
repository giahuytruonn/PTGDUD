import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">ASMALLWORLD</div>

        <div className="footer-content">
          <div className="footer-section">
            <h4>CONTACT US</h4>
            <a href="#">FAQs</a>
          </div>

          <div className="footer-section">
            <h4>PARTNERSHIPS</h4>
            <a href="#">Corporate</a>
            <a href="#">ASW Foundation</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-section">
            <h4>MANAGE COOKIES</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="footer-section">
            <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter email address" />
              <button>SUBSCRIBE</button>
            </div>
            <p>* Subscribe to receive daily travel inspiration from around the world</p>
          </div>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedin /></a>
        </div>

        <div className="footer-apps">
          <img src="https://dv4xo43u9eo19.cloudfront.net/assets/scalable/app_store-fde350eb6271ffdbc32eadf6f2c5844d75f115a17038bbe3138cb6fc191cceeb.svg" alt="App Store" />
          <img src="https://dv4xo43u9eo19.cloudfront.net/assets/scalable/google_play-59f8552ee237458f8f802ba5eefb6ff01f0c1e82a36ea12be2a11a2c46b9485b.svg" alt="Google Play" />
        </div>

        <div className="footer-bottom">
          Copyright © 2004 - 2025 ASMALLWORLD AG
        </div>
      </div>
    </footer>
  );
};

export default Footer;
