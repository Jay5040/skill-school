import React from 'react';
import './contactpage.scss'; 

const ContactPage = () => {
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
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your Email" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter your Subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter your Message here..."></textarea>
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