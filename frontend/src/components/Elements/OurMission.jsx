import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/barn.jpg');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/JonsFam3.jpg');

class OurMission extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: 'url(' + img1 + '), url(' + img2 + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one ">Our Mission</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3 + ')' }}>
                                        <h3 className="m-t0"><span className="font-weight-100"> Site Areas</span><br /> what we serve</h3>
                                        <p>We proudly serve the Bitterroot Valley and surrounding areas.</p>
                                        <ul className="list-angle-right anchor-line">
                                            <li><NavLink to={"/services"}>Framing</NavLink></li>
                                            <li><NavLink to={"/services"}>Roofing</NavLink></li>
                                            <li><NavLink to={"/services"}>Siding</NavLink></li>
                                            <li><NavLink to={"/services"}>Concrete</NavLink></li>

                                        </ul>
                                        <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + img4 + ')' }} />
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="contact-home1-left bg-white  p-a30 m-b0">
                                        <h3 className="text-black m-t0"><span className="font-weight-100">Get In</span> Touch</h3>
                                        <div className="call-us-section  text-center">
                                            <h4 className="m-b15">Let's work together</h4>
                                            <h2 className=" text-black m-b15 m-b0">(406)-274-4630</h2>
                                            <h4 className="call-us-address m-t0 m-b20">4377 Illinois Bench Rd, Stevensville Mt</h4>
                                            <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark">Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
};

export default OurMission;