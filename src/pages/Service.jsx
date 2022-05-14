import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

export const Service = () => {
    useEffect(() => {
        // window.location.reload(false);
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div>
                <div className="cursor" />
                <div className="cursor2" />
                <div className="main">
                <Header/>
                    <section className="breadcrumbs">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="breadcrumb-wrapper">
                                        <h1>Service</h1>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li>Service</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="service-area">
                        <div className="container">
                            <div className="row g-4">
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
                                                    <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
                                                    <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
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
                                                    <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
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
                                                    <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
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
                                                    <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
                                                    <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-4">
                                    <div className="single-service">
                                        <span className="count">05</span>
                                        <div className="service-icon">
                                            <i><img src="assets/img/icons/service-icon-5.png" alt="" /></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>Video Animation</h4>
                                            <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
                                            <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-4">
                                    <div className="single-service">
                                        <span className="count">06</span>
                                        <div className="service-icon">
                                            <i><img src="assets/img/icons/service-icon-6.png" alt="" /></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>3D Design</h4>
                                            <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
                                            <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-4">
                                    <div className="single-service">
                                        <span className="count">07</span>
                                        <div className="service-icon">
                                            <i><img src="assets/img/icons/service-icon-7.png" alt="" /></i>
                                        </div>
                                        <div className="service-content">
                                            <h4>UI/UX Design</h4>
                                            <p>interger purus adio, placerat ni in, ullamcorper nec dolor.</p>
                                            <a href="service-details.html">read more<i><img src="assets/img/icons/arrow-circle.png" alt="" /></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="how-we-work sec-mar-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-xl-4">
                                    <div className="title black">
                                        <span>How We Work</span>
                                        <h2>Our Unique Work Process.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="swiper work-process">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="work-process-wrapper">
                                                    <img src="assets/img/work-process-slider-1.png" alt="" />
                                                    <div className="work-process-inner">
                                                        <b>01</b>
                                                        <h4>Brainstorm &amp; Wirefirm</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="work-process-wrapper">
                                                    <img src="assets/img/work-process-slider-2.jpg" alt="" />
                                                    <div className="work-process-inner">
                                                        <b>02</b>
                                                        <h4>Brainstorm &amp; Wirefirm</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-button-next" />
                                        <div className="swiper-button-prev" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pricing-plan sec-mar">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-12 col-lg-6 col-xl-5 or2">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pay Monthly</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pay Yearly</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5 or1">
                                    <div className="title black">
                                        <span>Pricing Plan</span>
                                        <h2>Join Now For Your Business.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xl-4">
                                            <div className="single-price-box">
                                                <h3>Small Business</h3>
                                                <span>Single Business</span>
                                                <h2>$15.99/<sub>Per Month</sub></h2>
                                                <ul className="feature-list">
                                                    <li><i className="fas fa-check" />10 Pages Responsive Website</li>
                                                    <li><i className="fas fa-check" />5PPC Campaigns</li>
                                                    <li><i className="fas fa-check" />10 SEO Keyword</li>
                                                    <li><i className="fas fa-check" />5 Facebook Camplaigns</li>
                                                    <li><i className="fas fa-check" />2 Video Camplaigns</li>
                                                </ul>
                                                <div className="pay-btn">
                                                    <a href="contact.html">Pay Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-4">
                                            <div className="single-price-box">
                                                <h3>Professional</h3>
                                                <span>Small team</span>
                                                <h2>$99.99/<sub>Per Month</sub></h2>
                                                <ul className="feature-list">
                                                    <li><i className="fas fa-check" />10 Pages Responsive Website</li>
                                                    <li><i className="fas fa-check" />5PPC Campaigns</li>
                                                    <li><i className="fas fa-check" />10 SEO Keyword</li>
                                                    <li><i className="fas fa-check" />5 Facebook Camplaigns</li>
                                                    <li><i className="fas fa-check" />2 Video Camplaigns</li>
                                                </ul>
                                                <div className="pay-btn">
                                                    <a href="contact.html">Pay Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-4">
                                            <div className="single-price-box">
                                                <h3>Enterprice</h3>
                                                <span>Large Team</span>
                                                <h2>$120.99/<sub>Per Month</sub></h2>
                                                <ul className="feature-list">
                                                    <li><i className="fas fa-check" />10 Pages Responsive Website</li>
                                                    <li><i className="fas fa-check" />5PPC Campaigns</li>
                                                    <li><i className="fas fa-check" />10 SEO Keyword</li>
                                                    <li><i className="fas fa-check" />5 Facebook Camplaigns</li>
                                                    <li><i className="fas fa-check" />2 Video Camplaigns</li>
                                                </ul>
                                                <div className="pay-btn">
                                                    <a href="contact.html">Pay Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xl-4">
                                            <div className="single-price-box">
                                                <h3>Small Business</h3>
                                                <span>Single Business</span>
                                                <h2>$150.99/<sub>Per Yearly</sub></h2>
                                                <ul className="feature-list">
                                                    <li><i className="fas fa-check" />10 Pages Responsive Website</li>
                                                    <li><i className="fas fa-check" />5PPC Campaigns</li>
                                                    <li><i className="fas fa-check" />10 SEO Keyword</li>
                                                    <li><i className="fas fa-check" />5 Facebook Camplaigns</li>
                                                    <li><i className="fas fa-check" />2 Video Camplaigns</li>
                                                </ul>
                                                <div className="pay-btn">
                                                    <a href="contact.html">Pay Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-4">
                                            <div className="single-price-box">
                                                <h3>Professional</h3>
                                                <span>Small team</span>
                                                <h2>$199.99/<sub>Per Yearly</sub></h2>
                                                <ul className="feature-list">
                                                    <li><i className="fas fa-check" />10 Pages Responsive Website</li>
                                                    <li><i className="fas fa-check" />5PPC Campaigns</li>
                                                    <li><i className="fas fa-check" />10 SEO Keyword</li>
                                                    <li><i className="fas fa-check" />5 Facebook Camplaigns</li>
                                                    <li><i className="fas fa-check" />2 Video Camplaigns</li>
                                                </ul>
                                                <div className="pay-btn">
                                                    <a href="contact.html">Pay Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-4">
                                            <div className="single-price-box">
                                                <h3>Enterprice</h3>
                                                <span>Large Team</span>
                                                <h2>$220.99/<sub>Per Yearly</sub></h2>
                                                <ul className="feature-list">
                                                    <li><i className="fas fa-check" />10 Pages Responsive Website</li>
                                                    <li><i className="fas fa-check" />5PPC Campaigns</li>
                                                    <li><i className="fas fa-check" />10 SEO Keyword</li>
                                                    <li><i className="fas fa-check" />5 Facebook Camplaigns</li>
                                                    <li><i className="fas fa-check" />2 Video Camplaigns</li>
                                                </ul>
                                                <div className="pay-btn">
                                                    <a href="contact.html">Pay Now</a>
                                                </div>
                                            </div>
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
            </div>

        </>
    )
}
