import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-5.png');

class Specialization extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/roof-3.jpeg')} alt=""/>
                                        <div className="figcaption">
                                            <h4>Roofing</h4>
                                            <p>Life needs a roof.</p>
                                            <NavLink to="/project-grid" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/concrete.jpeg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Concrete</h4>
                                            <p>dazzling concrete work.</p>
                                            <NavLink to="/project-grid" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/siding.jpeg')} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Siding</h4>
                                            <p>Protect your house with us.</p>
                                            <NavLink to="/project-grid" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-6 m-b30">
                                    <div className="mt-box our-speciallization-content">
                                        <h3 className="m-t0"><span className="font-weight-100">Building</span> <br />It better with Johnson Family Construction</h3>
                                        <p>When it comes to your home, you want to trust the best, and not mess with
                                            the rest. Making your vision come true, is what we do.</p>
                                        <NavLink to="/project-grid"  className="site-button btn-effect">View All</NavLink>
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

export default Specialization;