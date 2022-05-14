import React, { useEffect } from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const About = () => {
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
                                    <h1>About us</h1>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>About us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-area sec-mar">
                    <div className="container">
                        <div className="out-story">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6">
                                    <div className="story-left">
                                        <div className="office-group-img">
                                            <img src="assets/img/story.png" alt="" />
                                            <div className="cto-message-wrapper">
                                                <div className="cto-message">
                                                    <p>Integer purus odio, placerat neclessi rhoncus in, ullamcorper nec
                                                        dolor.ol aptent taciti sociosqu.</p>
                                                    <h4>Carlo Rabil. <span>CTO &amp; FOUNDER, Finibus</span></h4>
                                                    <img src="assets/img/cto-signature.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-6">
                                    <div className="story-right">
                                        <div className="title black">
                                            <span>Inside Story</span>
                                            <h2 className="mb-15">We are creative Agency that creates beautiful.</h2>
                                        </div>
                                        <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Classe aptent
                                            taciti sociosqu ad litora torquent per conubia nostra, per inceptosi himenaeos.
                                            Praesent nec neque at dolor venenatis consectetur eu quis e Donec lacinia placerat
                                            felis non aliquam.Integer purus odio.</p>
                                        <div className="story-skills">
                                            <div className="story-skill">
                                                <div className="progress-bar-circle" data-percent={90} data-duration={1000} />
                                                <span>Idea &amp; Research</span>
                                            </div>
                                            <div className="story-skill">
                                                <div className="progress-bar-circle" data-percent={95} data-duration={1000} />
                                                <span>Wirfirm &amp; Design</span>
                                            </div>
                                            <div className="story-skill">
                                                <div className="progress-bar-circle" data-percent={85} data-duration={1000} />
                                                <span>Developing &amp; Launch</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                            <div className="signle-skill">
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
                                    <div className="single-count">
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
                                        <h6>Video Animtion</h6>
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
                                                <span>05 January, 2021</span>
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
                                                <h5>Posted by, Alen Jodge</h5>
                                                <span>05 January, 2021</span>
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
               <Footer/>
                <div className="scroll-top">
                    <span>Top<i className="bi bi-arrow-up" /></span>
                </div>
            </div>

        </>
    )
}

export default About