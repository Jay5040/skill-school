import React from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Skill School</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="auth-links">
          <a href="#" className="sign-up">Sign Up</a>
          <a href="#" className="login">Login</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
