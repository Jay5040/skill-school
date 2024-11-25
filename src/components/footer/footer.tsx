import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p>Contact us:</p>
          <p><a href="mailto:hello@skillbridge.com">hello@skillbridge.com</a></p>
          <p>+91 91813 23 2309</p>
          <p>Somewhere in the World</p>
        </div>
        <div>
          <h3>Home</h3>
          <ul>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">Our Courses</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Achievements</a></li>
            <li><a href="#">Our Goals</a></li>
          </ul>
        </div>
        <div>
          <h3>Social Profiles</h3>
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a>
        </div>
      </div>
      <p>© 2023 Skillbridge. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
