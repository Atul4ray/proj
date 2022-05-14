import React, { useEffect } from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import { Service } from './pages/Service';
import WebDesign from './pages/AllServices/WebDesign';
import Contact from './pages/Contact';
import DigitalMarketing from './pages/AllServices/DigitalMarketing';

function App() {
  const pageScripts = () => {
    const script = document.createElement("script");

    script.src = "assets/js/jquery-3.6.0.min.js"
    script.src = "assets/js/popper.min.js"
    script.src = "assets/js/bootstrap.min.js"
    script.src = "assets/js/swiper-bundle.min.js"
    script.src = "assets/js/jquery.nice-select.min.js"
    script.src = "assets/js/jQuery-plugin-progressbar.js"
    script.src = "assets/js/jquery.barfiller.js"
    script.src = "assets/js/waypoints.min.js"
    script.src = "assets/js/jquery.counterup.min.js"
    script.src = "assets/js/lightbox.min.js"
    script.src = "assets/js/jquery.magnific-popup.min.js"
    script.src = "assets/js/isotope.pkgd.min.js"
    script.src = "assets/js/masonry.pkgd.min.js"
    script.src = "assets/js/imagesloaded.pkgd.min.js"
    script.src = "assets/js/custom.js"
    script.async = true;

    document.body.appendChild(script);
  };
  useEffect(() => {
    pageScripts();
  }, []);

  return (
    <>

        <div className="cursor" />
        <div className="cursor2" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/digitalmarketing" element={<DigitalMarketing />} />


          <Route path="/contact" element={<Contact />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;





