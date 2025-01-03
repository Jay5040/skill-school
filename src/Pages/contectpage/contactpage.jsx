import React, { useState, useEffect } from 'react';
import './contactpage.scss';
import db from '../../../firebase'; // Ensure the path is correct
import { collection, addDoc } from "firebase/firestore";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loginGmail, setLoginGmail] = useState('');

  // Retrieve logged-in Gmail from local storage
  useEffect(() => {
    const storedGmail = localStorage.getItem('loginGmail');
    if (storedGmail) {
      setLoginGmail(storedGmail);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToStore = { ...formData, loginGmail };

    try {
      const messagesCollection = collection(db, 'contactMessages'); // Correctly initialize collection reference
      await addDoc(messagesCollection, dataToStore);
      alert('Your message has been successfully submitted to the server!');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving message to Firestore:', error);
      alert('An error occurred while submitting your message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Welcome to SkillBridge's Contact page. Feel free to reach out to us for any
          queries or support. We're here to assist you!
        </p>
      </div>
      <div className="contact-form-container">
        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Enter your Message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
