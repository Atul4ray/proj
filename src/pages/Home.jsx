import React, { useEffect } from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const Home = () => {


    return (
        <>
            <div>
                <div className="cursor" />
                <div className="cursor2" />
                {/* <div className="preloader_area_wrap">
                    <div className="sk-cube-grid">
                        <div className="sk-cube sk-cube1" />
                        <div className="sk-cube sk-cube2" />
                        <div className="sk-cube sk-cube3" />
                        <div className="sk-cube sk-cube4" />
                        <div className="sk-cube sk-cube5" />
                        <div className="sk-cube sk-cube6" />
                        <div className="sk-cube sk-cube7" />
                        <div className="sk-cube sk-cube8" />
                        <div className="sk-cube sk-cube9" />
                    </div>
                </div> */}
            </div>

            <div className="main">
                <Header />
                <section className="hero-area">
                    <div className="swiper hero-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="hero-content-wrapper">
                                                <div className="hero-content-wrap">
                                                    <div className="hero-content-img">
                                                        <img src="assets/img/hero-slider-1.jpg" alt="" />
                                                    </div>
                                                    <div className="hero-content">
                                                        <h2>Creative</h2>
                                                        <h1>Best solution for your <span>Business.</span></h1>
                                                        <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
                                                            an Duis a orci nunc. Suspendisse ac convallis sapien, quis
                                                            commodosani libero. Donec nec dui luctus, pellentesque lacus sed,
                                                            mollis leo.</p>
                                                        <a href="about.html" className="about-btn">About us</a>
                                                        <a href="project-details.html" className="work-btn">How we work</a>
                                                        <div className="slider-num">
                                                            <span>01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="hero-content-wrapper">
                                                <div className="hero-content-wrap">
                                                    <div className="hero-content-img">
                                                        <img src="assets/img/hero-slider-2.png" alt="" />
                                                    </div>
                                                    <div className="hero-content">
                                                        <h2>Creative</h2>
                                                        <h1>Best solution for your <span>Finances.</span></h1>
                                                        <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
                                                            an Duis a orci nunc. Suspendisse ac convallis sapien, quis
                                                            commodosani libero. Donec nec dui luctus, pellentesque lacus sed,
                                                            mollis leo.</p>
                                                        <a href="about.html" className="about-btn">About us</a>
                                                        <a href="project-details.html" className="work-btn">How we work</a>
                                                        <div className="slider-num">
                                                            <span>02</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="hero-content-wrapper">
                                                <div className="hero-content-wrap">
                                                    <div className="hero-content-img">
                                                        <img src="assets/img/hero-slider-3.png" alt="" />
                                                    </div>
                                                    <div className="hero-content">
                                                        <h2>Creative</h2>
                                                        <h1>Best solution for your <span>Markets.</span></h1>
                                                        <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
                                                            an Duis a orci nunc. Suspendisse ac convallis sapien, quis
                                                            commodosani libero. Donec nec dui luctus, pellentesque lacus sed,
                                                            mollis leo.</p>
                                                        <a href="about.html" className="about-btn">About us</a>
                                                        <a href="project-details.html" className="work-btn">How we work</a>
                                                        <div className="slider-num">
                                                            <span>03</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                    <div className="social-media">
                        <ul className="social-list">
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/">instagram</a></li>
                            <li><a href="https://www.linkedin.com/">Linked in</a></li>
                        </ul>
                    </div>
                </section>
                <section className="service-area sec-pad">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 col-xl-4">
                                <div className="title">
                                    <span>what we do</span>
                                    <h2>we work performed for client happy.</h2>
                                    <div className="cmn-btn">
                                        <a href="services.html">view all services</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-8">
                                <div className="row g-4">
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <div className="single-service">
                                            <span className="count">01</span>
                                            <div className="service-icon">
                                                <i><img src="assets/img/icons/service-icon-1.png" alt="" /></i>
                                            </div>
                                            <div className="service-content">
                                                <h4>web design</h4>
                                                <p>Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus,
                                                    ultricies nec sem</p>
                                                <a href="services.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <div className="single-service">
                                            <span className="count">02</span>
                                            <div className="service-icon">
                                                <i><img src="assets/img/icons/service-icon-2.png" alt="" /></i>
                                            </div>
                                            <div className="service-content">
                                                <h4>App design</h4>
                                                <p>Maecenas ut est in ante imperdiet laoreet eu quis vehicula justo elit
                                                    Phasellus Door</p>
                                                <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <div className="single-service">
                                            <span className="count">03</span>
                                            <div className="service-icon">
                                                <i><img src="assets/img/icons/service-icon-3.png" alt="" /></i>
                                            </div>
                                            <div className="service-content">
                                                <h4>Developing</h4>
                                                <p>Etiam eu ullamcorper ipsum. Pellentesque eu ipsum luctus libero euismod</p>
                                                <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <div className="single-service">
                                            <span className="count">04</span>
                                            <div className="service-icon">
                                                <i><img src="assets/img/icons/service-icon-4.png" alt="" /></i>
                                            </div>
                                            <div className="service-content">
                                                <h4>Graphic design</h4>
                                                <p>Quisque in massa nunc. Etiam blandit tortor nisl, auctor vulputate felis
                                                    convallis at.</p>
                                                <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-area sec-mar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-6">
                                <div className="about-left">
                                    <div className="title black">
                                        <span>About us</span>
                                        <h2 className="mb-15">Direction with our company.</h2>
                                    </div>
                                    <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Classe aptent taciti
                                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec
                                        neque at dolor venenatis consectetur eu quis ei Donec lacinia placerat felis non
                                        aliquam.Integer purus odio.</p>
                                    <div className="our-mission">
                                        <div className="msn-icon">
                                            <i><img src="assets/img/icons/mission-icon.png" alt="" /></i>
                                        </div>
                                        <div className="msn-content">
                                            <h5>Our Mission</h5>
                                            <p>Integer purus odio, placerat nec rhoni olor Class online and video.</p>
                                        </div>
                                        <div className="cto">
                                            <img src="assets/img/ctoFounder.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="cmn-btn">
                                        <a href="about.html">About more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6">
                                <div className="about-right">
                                    <div className="group-images">
                                        <img src="assets/img/about-bottom.jpg" alt="" />
                                        <div className="about-top">
                                            <img src="assets/img/about-top.png" alt="" />
                                        </div>
                                        <div className="about-skills">
                                            <div className="signle-skill">
                                                <div className="progress-bar-circle" data-percent={90} data-duration={1000} />
                                                <div className="skill-content">
                                                    <h6>web</h6>
                                                    <p>Clean Design</p>
                                                </div>
                                            </div>
                                            <div className="signle-skill xsm">
                                                <div className="progress-bar-circle" data-percent={85} data-duration={1000} />
                                                <div className="skill-content">
                                                    <h6>App</h6>
                                                    <p>Developing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-count">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="single-count">
                                        <i><img src="assets/img/icons/count-1.png" alt="" /></i>
                                        <div className="counter">
                                            <span className="odometer">150</span><sup>+</sup>
                                        </div>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="single-count">
                                        <i><img src="assets/img/icons/count-2.png" alt="" /></i>
                                        <div className="counter">
                                            <span className="odometer">250</span><sup>+</sup>
                                        </div>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="single-count">
                                        <i><img src="assets/img/icons/count-3.png" alt="" /></i>
                                        <div className="counter">
                                            <span className="odometer">150</span><sup>+</sup>
                                        </div>
                                        <p>Expert Teams</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3">
                                    <div className="single-count xsm">
                                        <i><img src="assets/img/icons/count-4.png" alt="" /></i>
                                        <div className="counter">
                                            <span className="odometer">28</span><sup>+</sup>
                                        </div>
                                        <p>Win Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="our-partner">
                    <div className="container-fluid g-0 overflow-hidden">
                        <div className="row align-items-center g-0">
                            <div className="col-12 col-xl-6">
                                <div className="newsletter">
                                    <div className="subscribes">
                                        <span>Get In Touch</span>
                                        <h1>Subscribe Our</h1>
                                        <h2>Newsletter</h2>
                                        <div className="subscribe-form">
                                            <form action="#" method="post">
                                                <input type="email" name="email" placeholder="Type Your Email" />
                                                <input type="submit" defaultValue="Connect" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <div className="our-clients">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-lg-4 col-xl-6">
                                            <div className="title">
                                                <span>Our partner</span>
                                                <h2>Join our Finibus community.</h2>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-1.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-2.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-3.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-4.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-5.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-6.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-7.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-8.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-9.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.org</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                            <div className="single-client">
                                                <img src="assets/img/partner-icons/partner-10.png" alt="" />
                                                <div className="client-hover">
                                                    <span>www.example.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="portfolio-area sec-mar-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7 col-xl-5">
                                <div className="title black">
                                    <span>Case Study</span>
                                    <h2>A diversified resilient portfolio.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper portfolio-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="single-portfolio">
                                    <div className="portfolio-data">
                                        <a href="#"><img src="assets/img/portfolio/portfolio-1.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-inner">
                                        <span>Template</span>
                                        <h4>Creative Agency</h4>
                                        <div className="portfolio-hover">
                                            <a href="project-details.html" className="case-btn">Case Study</a>
                                            <a data-lightbox="image1" href="assets/img/portfolio/portfolio-1.jpg"><i className="fas fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-portfolio">
                                    <div className="portfolio-data">
                                        <a href="#"><img src="assets/img/portfolio/portfolio-2.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-inner">
                                        <span>UI Kit</span>
                                        <h4>E-Shop Ecommerce</h4>
                                        <div className="portfolio-hover">
                                            <a href="project-details.html" className="case-btn">Case Study</a>
                                            <a data-lightbox="image1" href="assets/img/portfolio/portfolio-2.jpg"><i className="fas fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-portfolio">
                                    <div className="portfolio-data">
                                        <a href="#"><img src="assets/img/portfolio/portfolio-3.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-inner">
                                        <span>Software</span>
                                        <h4>Desktop Mockup</h4>
                                        <div className="portfolio-hover">
                                            <a href="project-details.html" className="case-btn">Case Study</a>
                                            <a data-lightbox="image1" href="assets/img/portfolio/portfolio-3.jpg"><i className="fas fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-portfolio">
                                    <div className="portfolio-data">
                                        <a href="#"><img src="assets/img/portfolio/portfolio-4.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-inner">
                                        <span>Graphic</span>
                                        <h4>Art Deco Cocktails</h4>
                                        <div className="portfolio-hover">
                                            <a href="project-details.html" className="case-btn">Case Study</a>
                                            <a data-lightbox="image1" href="assets/img/portfolio/portfolio-4.jpg"><i className="fas fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-portfolio">
                                    <div className="portfolio-data">
                                        <a href="#"><img src="assets/img/portfolio/portfolio-5.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-inner">
                                        <span>App</span>
                                        <h4>Mobile Crypto Wallet</h4>
                                        <div className="portfolio-hover">
                                            <a href="project-details.html" className="case-btn">Case Study</a>
                                            <a data-lightbox="image1" href="assets/img/portfolio/portfolio-5.jpg"><i className="fas fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="single-portfolio">
                                    <div className="portfolio-data">
                                        <a href="#"><img src="assets/img/portfolio/portfolio-3.jpg" alt="" /></a>
                                    </div>
                                    <div className="portfolio-inner">
                                        <span>Template</span>
                                        <h4>Creative Agency</h4>
                                        <div className="portfolio-hover">
                                            <a href="project-details.html" className="case-btn">Case Study</a>
                                            <a data-lightbox="image1" href="assets/img/portfolio/portfolio-3.jpg"><i className="fas fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next" />
                        <div className="swiper-button-prev" />
                        <div className="swiper-pagination" />
                    </div>
                </div>
                <section className="why-choose-us sec-mar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <div className="title black">
                                    <span>Why Choose Finibus</span>
                                    <h2 className="mb-15">success is just around the next online corner</h2>
                                </div>
                                <div className="video-demo">
                                    <img src="assets/img/play-video.jpg" alt="" />
                                    <div className="play-btn">
                                        <a className="popup-video" href="https://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fas fa-play" /> Play now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <div className="valuable-skills">
                                    <img src="assets/img/valuable-skill.jpg" alt="" />
                                    <div className="signle-bar">
                                        <h6>Web Design</h6>
                                        <div id="bar1" className="barfiller">
                                            <span className="tip" />
                                            <span className="fill" data-percentage={90} />
                                        </div>
                                    </div>
                                    <div className="signle-bar">
                                        <h6>App Development</h6>
                                        <div id="bar2" className="barfiller">
                                            <span className="tip" />
                                            <span className="fill" data-percentage={98} />
                                        </div>
                                    </div>
                                    <div className="signle-bar">
                                        <h6>Backend</h6>
                                        <div id="bar3" className="barfiller">
                                            <span className="tip" />
                                            <span className="fill" data-percentage={80} />
                                        </div>
                                    </div>
                                    <div className="signle-bar">
                                        <h6>Video Animation</h6>
                                        <div id="bar4" className="barfiller">
                                            <span className="tip" />
                                            <span className="fill" data-percentage={85} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="swiper testimonial-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-content">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="client-info">
                                                    <div className="client-pic">
                                                        <img src="assets/img/client.jpg" alt="" />
                                                    </div>
                                                    <div className="client-details">
                                                        <h4>Savannah Nguyen</h4>
                                                        <span>Executive CEO</span>
                                                    </div>
                                                </div>
                                                <p><i className="fas fa-quote-left" /> Curabitur magna nisi, egestas quis est in,
                                                    finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis,
                                                    ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis
                                                    purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor
                                                    odio, aliquam vitae noday backowner condimentum this fire ongon then only on
                                                    <i className="fas fa-quote-right" /></p>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-content">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="client-info">
                                                    <div className="client-pic">
                                                        <img src="assets/img/client-2.jpg" alt="" />
                                                    </div>
                                                    <div className="client-details">
                                                        <h4>Nailong Jeso</h4>
                                                        <span>CTO Founder</span>
                                                    </div>
                                                </div>
                                                <p><i className="fas fa-quote-left" /> Curabitur magna nisi, egestas quis est in,
                                                    finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis,
                                                    ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis
                                                    purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor
                                                    odio, aliquam vitae noday backowner condimentum this fire ongon then only on
                                                    <i className="fas fa-quote-right" /></p>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-content">
                                                <div className="quote">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="client-info">
                                                    <div className="client-pic">
                                                        <img src="assets/img/client-3.jpg" alt="" />
                                                    </div>
                                                    <div className="client-details">
                                                        <h4>Gautam Yamni</h4>
                                                        <span>Designer Head</span>
                                                    </div>
                                                </div>
                                                <p><i className="fas fa-quote-left" /> Curabitur magna nisi, egestas quis est in,
                                                    finibus pulvinar ipsum. Nunc sit amet odio interdum, maximus dolor quis,
                                                    ullamcorper lectus. Mauris vitae faucibus libero. Curabitur eu convallis
                                                    purus. Nunc accumsan diam in arcu pellentesque sagittis. Curabitur dolor
                                                    odio, aliquam vitae noday backowner condimentum this fire ongon then only on
                                                    <i className="fas fa-quote-right" /></p>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="latest-news sec-mar">
                    <div className="container">
                        <div className="row gx-4">
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="signle-news">
                                    <div className="tag">
                                        <a href="#">Web Design</a>
                                    </div>
                                    <div className="post-img">
                                        <a href="blog_details.html"><img src="assets/img/post/post-1.jpg" alt="" /></a>
                                    </div>
                                    <div className="news-content">
                                        <div className="author">
                                            <div className="author-pic">
                                                <img src="assets/img/author/author-1.jpg" alt="" />
                                            </div>
                                            <div className="author-info">
                                                <h5>Posted by, Alen Jodge</h5>
                                                <span>05 January, 2022</span>
                                            </div>
                                        </div>
                                        <h3><a href="blog_details.html">Donec a porttitor phari sod tellus Nunc quis erosn.</a>
                                        </h3>
                                        <p>Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent nec neque at dolor
                                            ti venenatis consectetur eu quis ex.</p>
                                        <div className="view-btn">
                                            <a href="blog_details.html">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="signle-news">
                                    <div className="tag">
                                        <a href="#">Software</a>
                                    </div>
                                    <div className="post-img">
                                        <a href="blog_details.html"><img src="assets/img/post/post-2.jpg" alt="" /></a>
                                    </div>
                                    <div className="news-content">
                                        <div className="author">
                                            <div className="author-pic">
                                                <img src="assets/img/author/author-2.jpg" alt="" />
                                            </div>
                                            <div className="author-info">
                                                <h5>Posted by, Kim karden</h5>
                                                <span>05 January, 2022</span>
                                            </div>
                                        </div>
                                        <h3><a href="blog_details.html">Mekusa a porttitor phari sod tellus algo quis ksro.</a>
                                        </h3>
                                        <p>Aptent taciti sociosqu ad litora torquent pi himenaeos. Praesent nec neque at dolor
                                            ti venenatis consectetur eu quis ex.</p>
                                        <div className="view-btn">
                                            <a href="blog_details.html">View details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="title black">
                                    <span>Blog</span>
                                    <h2>Latest news And Article modern design.</h2>
                                    <div className="cmn-btn">
                                        <a href="blog.html">View All Blog</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="lets-talk sec-pad">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-9 col-lg-8 col-xl-7">
                                <div className="title special">
                                    <span>Let’s Talk</span>
                                    <h2>About Your Next <br /><b>Project</b> Your Mind</h2>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-4 col-xl-5 text-end">
                                <div className="getin-touch">
                                    <div className="cmn-btn">
                                        <a href="contact.html">Get In Touch</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <div className="scroll-top">
                    <span>Top<i className="bi bi-arrow-up" /></span>
                </div>
            </div>

        </>
    )
}

export default Home