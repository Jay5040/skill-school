import React, { useState } from "react";
import "./signuppage"; 
import db from "../../../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore"; 

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gmail: "",
    gmailPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName) validationErrors.firstName = "Enter Your First Name";
    if (!formData.lastName) validationErrors.lastName = "Enter Your Last Name";
    if (!formData.phone) validationErrors.phone = "Enter Phone Number";
    else if (!phoneRegex.test(formData.phone))
      validationErrors.phone = "Phone number must be 10 digits";
    if (!formData.gmail || !formData.gmail.endsWith("@gmail.com"))
      validationErrors.gmail = "Enter a valid Gmail (must end with @gmail.com)";
    if (!formData.gmailPassword)
      validationErrors.gmailPassword = "Enter Your Password";
    else if (formData.gmailPassword.length < 8)
      validationErrors.gmailPassword = "Password must be at least 8 characters long";

    return validationErrors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);
    const existingGmails = querySnapshot.docs.map(doc => doc.data().gmail);

    if (existingGmails.includes(formData.gmail)) {
      setErrors({
        gmail: "This Gmail ID already exists. Please use a different Gmail.",
      });
      return;
    }

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      gmail: formData.gmail,
      gmailPassword: formData.gmailPassword,
    };

    // Store the new user in Firestore
    await setDoc(doc(db, "users", formData.gmail), newUser);

    setSuccessMessage("Account created successfully! Redirecting to login...");
    setTimeout(() => {
      window.location = "/login"; // Redirect to login page
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your First Name"
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your Last Name"
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your Phone Number"
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="gmail">Gmail</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              value={formData.gmail}
              onChange={handleInputChange}
              placeholder="Enter your Gmail"
            />
            {errors.gmail && <span className="error-message">{errors.gmail}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="gmailPassword">Password</label>
            <input
              type="password"
              id="gmailPassword"
              name="gmailPassword"
              value={formData.gmailPassword}
              onChange={handleInputChange}
              placeholder="Enter your Password"
            />
            {errors.gmailPassword && (
              <span className="error-message">{errors.gmailPassword}</span>
            )}
          </div>

          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <div className="signup-link">
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
