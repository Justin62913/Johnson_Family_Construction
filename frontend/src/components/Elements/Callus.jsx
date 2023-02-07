import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/roof-3.jpeg');

class Callus extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="overlay-main bg-primary opacity-07" />
                    <div className="container">
                        <div className="section-content">
                            <div className="call-us-section text-center">
                                <h4 className="m-b15">Let's work together</h4>
                                <h2 className="call-us-number m-b15 m-b0">(406)-274-4630</h2>
                                <h4 className="call-us-address m-t0 m-b20">4377 Illinois Bench Rd, Stevensville Mt</h4>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect bg-dark">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Callus;