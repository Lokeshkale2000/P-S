import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Home from './components/pages/Home'; // Import the Home component
import Footer from './components/Footer/Footers';

function App() {
  return (
    <>
      <Router>
        <Navbar className="Navbar" />
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
