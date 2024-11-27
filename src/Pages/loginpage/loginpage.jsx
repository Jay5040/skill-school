import React, { useState } from "react";
import { useAuth } from "../../components/authentication/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Loginpage.scss";
import db from "../../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Login = () => {
  const { setIsLoggedIn } = useAuth();
  const [gmail, setGmail] = useState("");
  const [gmailPassword, setGmailPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    let validationErrors = {};
    if (!gmail) validationErrors.gmail = "Please enter your Gmail.";
    if (!gmailPassword) validationErrors.gmailPassword = "Please enter your Password.";

    setErrors(validationErrors);

    // Stop submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) return;

    try {
      // Query Firestore for user credentials
      const usersCollection = collection(db, "users");
      const q = query(usersCollection, where("gmail", "==", gmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();

        if (userData.gmailPassword === gmailPassword) {
          setSuccessMessage("Login successful! Redirecting...");
          setIsLoggedIn(true); // Update global authentication state
          console.log("User verified.");

          // Redirect to the home page using useNavigate
          setTimeout(() => {
            navigate("/"); // Or navigate("/home") if needed
          }, 2000);
        } else {
          setErrors({ general: "Invalid email or password." });
        }
      } else {
        setErrors({ general: "No account found with this Gmail." });
      }
    } catch (error) {
      console.error("Error verifying user credentials: ", error);
      setErrors({ general: "An error occurred during login. Please try again later." });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.general && <p className="error-message">{errors.general}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="gmail">Gmail</label>
            <input
              type="email"
              id="gmail"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              placeholder="Enter your Gmail"
            />
            {errors.gmail && <span className="error-message">{errors.gmail}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="gmailPassword">Password</label>
            <input
              type="password"
              id="gmailPassword"
              value={gmailPassword}
              onChange={(e) => setGmailPassword(e.target.value)}
              placeholder="Enter your Password"
            />
            {errors.gmailPassword && (
              <span className="error-message">{errors.gmailPassword}</span>
            )}
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
