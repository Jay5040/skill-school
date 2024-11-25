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
          <li><Link to="/contact" className="sign-up">Contact</Link></li>
        </ul>
        <div className="auth-links">
          <Link to="/signup" className="sign-up">Sign Up</Link>
          <Link to="/login" className="login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
