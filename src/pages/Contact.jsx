import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const Contact = () => {
    useEffect(() => {
        // window.location.reload(false);
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="main">
            <Header/>
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-wrapper">
                                    <h1>Contact Us</h1>
                                    <ul>
                                        <li><Link to="index.html">Home</Link></li>
                                        <li>Contact us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-area sec-mar">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xl-6">
                                <div className="title black">
                                    <span>Get In Touch</span>
                                    <h2>contact us if you have more questions.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="office-info">
                                    <div className="icon">
                                        <i className="bi bi-geo-alt" />
                                    </div>
                                    <h4>Location</h4>
                                    <p> 14th Avenue Gaur City 2, Ghaziabad, Uttar Pradesh 201009</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="office-info">
                                    <div className="icon">
                                        <i className="bi bi-telephone" />
                                    </div>
                                    <h4>Phone</h4>
                                    <Link to="tel:9560850495">+91 9560850495</Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4">
                                <div className="office-info">
                                    <div className="icon">
                                        <i className="bi bi-envelope" />
                                    </div>
                                    <h4>Email</h4>
                                    <Link to="#"><span className="__cf_email__" data-cfemail="c3aaada5ac83a6bba2aeb3afa6eda0acae">info@dmchacha.com</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-information">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6">
                                    <div className="contact-form">
                                        <h3>Have Any Questions</h3>
                                        <form id="contact-form" action="https://demo-egenslab.b-cdn.net/html/finibus/demo/mail.php" method="POST">
                                            <div className="row">
                                                <div className="col-12">
                                                    <input type="text" name="name" placeholder="Enter your name" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <input type="email" name="email" placeholder="Enter your email" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <input type="text" name="subject" placeholder="Subject" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" cols={30} rows={10} placeholder="Your message" defaultValue={""} />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit">Send Message</button>
                                                </div>
                                                <p className="form-message" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6">
                                    <div className="google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.260237132539!2d77.41778441508234!3d28.621961582421886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefb61bf06f2d%3A0x80a32d8f6ea88c71!2s14th%20Ave%2C%20Gaur%20City%202%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1652535480565!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" />
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
                                        <Link to="contact.html">Get In Touch</Link>
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

        </>
    )
}

export default Contact