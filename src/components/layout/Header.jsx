import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
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
            <div className="cursor" />
            <div className="cursor2" />
            <header className="position_top sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col col-sm-3 col-md-3 col-lg-3 col-xl-2">
                            <div className="logo">
                                <a href="index.html"> <span><h2 style={{ color: '#d90a2c' }}>DM<span className='text-white d-inline'>ChaCha</span> </h2></span></a>
                            </div>
                        </div>
                        <div className="col col-sm-5 col-md-6 col-lg-6 col-xl-8 text-end">
                            <nav className="main-nav">
                                <div className="mobile-menu-logo">
                                    <a href="index.html"> <h3><span style={{ color: '#d90a2c' }}>DM<span className='text-white d-inline'>Chacha</span> </span> </h3></a>
                                </div>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li className="has-child">
                                        <Link to="/services">Services</Link>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><Link to="/webdesign">Web Design</Link></li>
                                            <li><Link to="/digitalmarketing">Digital Merketing</Link></li>

                                        </ul>
                                    </li>
                                    {/* <li className="has-child">
                                        <a href="project.html">Projects</a>
                                        <i className="bi bi-chevron-down" />
                                        <ul className="sub-menu">
                                            <li><a href="project.html">Project</a></li>
                                            <li><a href="project2.html">Project masonry</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                        </ul>
                                    </li> */}
                                    <li><Link to="/contact">Contact us</Link></li>
                                </ul>
                                <div className="get-quate dn">
                                    <div className="cmn-btn">
                                        <Link to="/contact">Get a quote</Link>
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
                                    <Link to="/contact">Get a quote</Link>
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