import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><span><h2 style={{ color: '#d90a2c' }}>DM<span className='text-white'>ChaCha</span> </h2></span></a>
                </div>
                <address>
                  <h4>Office</h4>
                  <p>14th Avenue Gaur City 2, Ghaziabad, Uttar Pradesh 201009</p>
                </address>
                <ul className="social-media-icons">
                  <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Our Services</h4>
                <ul className="footer-menu">
                  <li><a href="service-details.html">Strategy &amp; Research</a></li>
                  <li><a href="service-details.html">Web Development</a></li>
                  <li><a href="service-details.html">Web Solution</a></li>
                  <li><a href="service-details.html">Digital Merketing</a></li>
                  <li><a href="service-details.html">App Design</a></li>
                  <li><a href="service-details.html">App Development</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Company</h4>
                <ul className="footer-menu">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="project.html">Project</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="contact.html">Career</a></li>
                  <li><a href="services.html">Pricing Plan</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <div className="footer-widget">
                <h4>Contacts</h4>
                <div className="number">
                  <div className="num-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="phone">
                  <Link to="tel:9560850495">+91 9560850495</Link>
                  </div>
                </div>
                <div className="office-mail">
                  <div className="mail-icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="email">
                  <Link to="#"><span className="__cf_email__" data-cfemail="c3aaada5ac83a6bba2aeb3afa6eda0acae">info@dmchacha.com</span></Link>
                  </div>
                </div>
                <div className="address">
                  <div className="address-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <p>14th Avenue Gaur City 2, Ghaziabad, Uttar Pradesh 201009</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>Copyright 2022 <b style={{ color: '#d90a2c' }}> DM<span className='text-white'>ChaCha</span> </b> | Design By <Link to="/"><b style={{ color: '#d90a2c' }}>DM<span className='text-white'>ChaCha</span></b></Link></span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Support Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer