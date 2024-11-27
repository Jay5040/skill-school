import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/authentication/AuthContext";
import "./Header.scss";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Redirect to the home page after logout
    window.location.href = "/";
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Skill School</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><Link to="/courses">Course</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Pricing</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-links">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="Logout">
              logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="sign-up">Sign Up</Link>
              <Link to="/login" className="login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
