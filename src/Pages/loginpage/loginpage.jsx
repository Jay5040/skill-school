import React, { useState } from "react";
import "./Loginpage.scss";
import db from "../../../firebase";
import { query, where, getDocs, collection, addDoc } from "firebase/firestore";

const Login = () => {
  const [gmail, setGmail] = useState("");
  const [gmailPassword, setGmailPassword] = useState("");
  const [errors, setErrors] = useState({ gmail: "", gmailPassword: "" });
  const usersRef = collection(db, "users"); 

  const handleLogin = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!gmail) {
      validationErrors.gmail = "Please Enter Your Gmail";
    }

    if (!gmailPassword) {
      validationErrors.gmailPassword = "Please Enter Password";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const q = query(usersRef, where("gmail", "==", gmail));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      setErrors({ ...errors, gmail: "User ID does not exist. Please create an account." });
    } else {
      const user = querySnapshot.docs[0].data(); 
      if (user.gmailPassword === gmailPassword) {
        const loginData = {
          gmail,
          gmailPassword,
          loginTime: new Date().toISOString(), 
        };

        try {
          await addDoc(collection(db, "logins"), loginData);
          alert("Login successful!");
          window.location = "/home"; 
        } catch (e) {
          console.error("Error storing login data: ", e);
        }
      } else {
        setErrors({ ...errors, gmailPassword: "Your User ID and Password do not match" });
      }
    }
  };

  const redirectToSignup = () => {
    window.location = "/signup";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
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
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <a onClick={redirectToSignup} href="#signup">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
