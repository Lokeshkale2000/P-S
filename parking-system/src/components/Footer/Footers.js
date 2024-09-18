import React from 'react';
import './Footers.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Subscribe Section */}
        <div className="footer-section subscribe-section">
          <h3>Subscribe Now</h3>
          <p>There are many variations of passages of Lorem Ipsum available.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="subscribe-input" />
            <button className="subscribe-button">Subscribe</button>
          </form>
        </div>
        
   
        <div className="footer-section">
          <h3>Information</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
        </div>
        
        <div className="footer-section">
          <h3>Investments</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
        </div>

      
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>Location: Pune</p>
          <p>Phone: +91 9307195244</p>
          <p>Email: lokeshkale2020@gmail.com</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© All Rights Reserved By Free Html Templates</p>
      </div>
    </footer>
  );
}

export default Footer;
