import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'

const DigitalMarketing = () => {
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
                                        <h1>Digital Marketing</h1>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li>Digital Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="service-details sec-mar">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-8 col-xl-8 or2">
                                    <div className="signle-service-details">
                                        <h3><img src="assets/img/icons/service-details-icon.svg" alt="" />Digital Marketing</h3>
                                        <p>In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus sapien
                                            venenatis orci,in eget lacinia magna justo vehicula metus. Morbi sit amet erat faucibus,
                                            sagittis libero sed, thatenigr condimentum tortor. Aenean ac nunc dolor. Quisque
                                            vestibulum mollis nisi, vel dictum nisi. nangol Vestibulum tempor tristique neque non
                                            pretium. Etiam leo risus, consectetur sagittis ullamcorper scelerisque, blandit vitae
                                            sem. Etiam semper enim sapien, nec consequat lectus pellentesque sit amet. Curabitur
                                            viverra ac tortor a porttitor. Donec tristique, dui at molestie facilisis, justo dolor
                                            on dapibus urna, sit amet viverra elit neque a lectus.Etiam semper enim sapien, nec
                                            consequat lectus pellentesque sit amet.Fusce mollis faucibus malesuada. Curabitur et
                                            enim auctor, rhoncus elit then fermentum, luctus tortor. Curabitur quam nisi, ornare
                                            elementum tellus eget, nangol Vestibulum tempor tristique neque non pretium. Etiam leo
                                            risus, consectetur sagittis ullamcorper scelerisque, blandit vitae sem. Etiam semper
                                            enim sapien, nec consequat lectus pellentesque sit amet. Curabitur viverra ac tortor a
                                            porttitor. Donec tristique, dui at molestie facilisis, justo dolor on dapibus urna, sit
                                            amet viverra elit neque a lectus. luctus maximus fore lectus. Sed egestas facilisis
                                            convallis. Proin dapibus magna vitae dolor accumsan, a egestas velitEtiam semper enim
                                            sapien.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-4 or1">
                                    <div className="sidebar-search">
                                        <form action="#" method="post">
                                            <input type="search" name="search" placeholder="Search Here" />
                                            <button type="submit"><i className="bi bi-search" /></button>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h4>Services</h4>
                                        <ul className="service-list">
                                            <li><a href="service-details.html"><i><img src="assets/img/icons/dash-circle-icon.svg" alt="" /></i>Web Design <span>(15)</span></a></li>
                                            <li><a href="service-details.html"><i><img src="assets/img/icons/dash-circle-icon.svg" alt="" /></i>Apps Development <span>(18)</span></a></li>
                                            <li><a href="service-details.html"><i><img src="assets/img/icons/dash-circle-icon.svg" alt="" /></i>Software Development <span>(21)</span></a></li>
                                            <li><a href="service-details.html"><i><img src="assets/img/icons/dash-circle-icon.svg" alt="" /></i>Motion Graphics <span>(25)</span></a></li>
                                            <li><a href="service-details.html"><i><img src="assets/img/icons/dash-circle-icon.svg" alt="" /></i>UI/UX Design <span>(29)</span></a></li>
                                            <li><a href="service-details.html"><i><img src="assets/img/icons/dash-circle-icon.svg" alt="" /></i>Graphic Design <span>(31)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="single-service-work-process">
                                <h3>How We Work in our services</h3>
                                <div className="single-step">
                                    <div className="row">
                                        <div className="col-md-8 col-xl-8 or2">
                                            <div className="step">
                                                <div className="step-count">
                                                    <span>01</span>
                                                </div>
                                                <h4>Wireframe &amp; Design</h4>
                                                <p>In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus
                                                    sapien venenatis orci, eget lacinia magna justo vehiculametus. Morbi sit amet
                                                    erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor.
                                                    Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique
                                                    neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper
                                                    scelerisque, blandit vitae sem.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xl-4 or1">
                                            <div className="step-img">
                                                <img src="assets/img/step-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-step">
                                    <div className="row">
                                        <div className="col-md-4 col-xl-4">
                                            <div className="step-img">
                                                <img src="assets/img/step-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-xl-8">
                                            <div className="step">
                                                <div className="step-count">
                                                    <span>02</span>
                                                </div>
                                                <h4>Developing</h4>
                                                <p>In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus
                                                    sapien venenatis orci, eget lacinia magna justo vehiculametus. Morbi sit amet
                                                    erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor.
                                                    Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique
                                                    neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper
                                                    scelerisque, blandit vitae sem.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-step">
                                    <div className="row">
                                        <div className="col-md-8 col-xl-8 or2">
                                            <div className="step">
                                                <div className="step-count">
                                                    <span>03</span>
                                                </div>
                                                <h4>Checkup &amp; Launch</h4>
                                                <p>In euismod lacinia rhoncus. Morbi ornare, lectus quis mattis finibus, metus
                                                    sapien venenatis orci, eget lacinia magna justo vehiculametus. Morbi sit amet
                                                    erat faucibus, sagittis libero sed, condimentum tortor. Aenean ac nunc dolor.
                                                    Quisque vestibulum mollis nisi, vel dictum nisi. Vestibulum tempor tristique
                                                    neque non pretium. Etiam leo risus, consectetur sagittis ullamcorper
                                                    scelerisque, blandit vitae sem.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-xl-4 or1">
                                            <div className="step-img">
                                                <img src="assets/img/step-3.jpg" alt="" />
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
                    <Footer/>
                    <div className="scroll-top">
                        <span>Top<i className="bi bi-arrow-up" /></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DigitalMarketing