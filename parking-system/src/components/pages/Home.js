import React from 'react';
import Slider from '../imagesilder/Slider';
import Reason from '../reasoncontainer/Reason';
import About from '../pages/About';

const Home = () => {
  return (
    <div>
        
      <Slider />
      <Reason />
      <About></About>
    </div>
  );
};

export default Home;
