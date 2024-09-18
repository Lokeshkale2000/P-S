import React, { useState, useEffect } from 'react';
import './Slider.css';

// Import images from the local folder
import image1 from '../Assets/images/bikeimage.jpg';
import image2 from '../Assets/images/carimage.webp';
import image3 from '../Assets/images/truckimage.jpg';

const Slider = () => {
  // List of imported images
  const images = [image1, image2, image3];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 2 seconds using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images.length]);

  return (
    <div className="slider">
      <div className="overlay">
        <h1 className="slider-title">The Best Deals <br></br>For Parking Lots from <br></br>Car <br></br>Bike<br></br> Truck</h1>
      </div>
      {/* Display the current image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />
    </div>
  );
};

export default Slider;
