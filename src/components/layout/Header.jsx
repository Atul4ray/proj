import React, { useEffect } from 'react'
const Header = () => {
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
            <header className="position_top sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
                            <nav className="main-nav">
                                <div className="mobile-menu-logo">
                                    <a href="index.html"><img src="assets/img/logo.png" alt="" /></a>
                                </div>
                                <ul>
                                    <li className="has-child active">
                                        <a href="index.html" className="active">Home</a>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><a href="index.html" className="active">Home 01</a></li>
                                            <li><a href="index2.html">Home 02</a></li>
                                            <li><a href="index3.html">Home 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About us</a></li>
                                    <li className="has-child">
                                        <a href="services.html">Services</a>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><a href="services.html">Service</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child">
                                        <a href="project.html">Projects</a>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><a href="project.html">Project</a></li>
                                            <li><a href="project2.html">Project masonry</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child">
                                        <a href="blog.html">Blogs</a>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog2.html">Blog standard</a></li>
                                            <li><a href="blog_details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child">
                                        <a href="#">Pages</a>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><a href="commingsoon.html">Comming soon</a></li>
                                            <li><a href="error.html">Error 404</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                                <div className="get-quate dn">
                                    <div className="cmn-btn">
                                        <a href="contact.html">Get a quote</a>
                                    </div>
                                </div>
                            </nav>
                            <div className="mobile-menu">
                                <a href="javascript:void(0)" className="cross-btn">
                                    <span className="cross-top" />
                                    <span className="cross-middle" />
                                    <span className="cross-bottom" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-end">
                            <div className="get-quate">
                                <div className="cmn-btn">
                                    <a href="contact.html">Get a quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header