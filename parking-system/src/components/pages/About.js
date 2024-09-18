// src/components/pages/About.js
import React from 'react';
import './About.css';
import img1 from '../Assets/images/img1.jpg';
import img2 from '../Assets/images/img2.jpeg';
import img3 from '../Assets/images/img3.jpg';
import img4 from '../Assets/images/img4.webp';

const About = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="text-content">
            <h1>About Us</h1>
            <p>Welcome to Parking Management! We are a dedicated team committed to providing efficient and reliable parking solutions. Our goal is to make parking easy and stress-free for everyone. Here’s a little more about us:</p>
            
        
            <h3>Our Vision</h3>
            <p>To be the leading provider of parking management services, renowned for our commitment to quality and customer satisfaction.</p>
            
            <h3>Our Values</h3>
            <ul>
              <li><strong>Customer Focus:</strong> We put our customers at the heart of everything we do.</li>
              <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
              <li><strong>Innovation:</strong> We continuously seek new ways to improve our services.</li>
              <li><strong>Excellence:</strong> We strive for the highest standards in all that we do.</li>
            </ul>
            
             </div>

          <div className="image-grid">
            <img src={img1} alt="img1" className="grid-image"  />
            <img src={img2} alt="img2" className="grid-image" />
            <img src={img3} alt="img3" className="grid-image" />
            <img src={img4} alt="img4" className="grid-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
