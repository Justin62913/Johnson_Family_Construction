import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 bg-white">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={require('./../../images/JonsFam.jpg')} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            <h3 className="m-t0">We pride ourselves in quality, we guarantee you will be satisfied.</h3>
                                            <p>As our business expands we continue to add experience and expertise. No matter the repair or new project please give us a call.</p>
                                            <div className="call-for-quote-outer">
                                                <div className="call-quote">
                                                    <span>Call For a Quote:</span>
                                                    <h4>(406) 274 4630</h4>
                                                </div>
                                                <div className="call-estimate bg-dark">
                                                <NavLink to={"/contactus"} className="site-button-secondry btn-effect">Send Us A Message</NavLink>
                                                </div>
                                            </div>
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

export default AboutCompany;