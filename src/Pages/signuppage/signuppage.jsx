import React, { useState } from "react";
import db from "../../../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import "./signuppage.scss";

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
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const validationErrors = {};
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

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      const existingGmails = querySnapshot.docs.map((doc) => doc.data().gmail);

      if (existingGmails.includes(formData.gmail)) {
        setErrors({ gmail: "This Gmail ID already exists. Please use a different Gmail." });
        return;
      }

      const newUser = { ...formData };
      await setDoc(doc(db, "users", formData.gmail), newUser);

      setSuccessMessage("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        window.location = "/login";
      }, 2000);
    } catch (error) {
      console.error("Error adding document to Firestore: ", error);
      setErrors({ firebase: "Failed to create an account. Please try again." });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSignUp}>
          {["firstName", "lastName", "phone", "gmail", "gmailPassword"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>
                {field === "gmailPassword" ? "Password" : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "gmailPassword" ? "password" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              />
              {errors[field] && <span className="error-message">{errors[field]}</span>}
            </div>
          ))}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="redirect-link">
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">Login Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
