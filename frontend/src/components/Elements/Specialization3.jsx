import React from 'react';


var bnr1 = require('./../../images/background/bg-6.png');

class Specialization3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-dark mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="section-head m-b50 text-white text-center">
                                <h3 className="m-t0">Let us meet your construction needs.</h3>

                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/siding.jpeg')}  alt=""/>
                                        <div className="figcaption">
                                            <h4>Framing and Siding</h4>
                                            <p>Need some framing or siding done? We can help with that!</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/update_roof2.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Roofing</h4>
                                            <p>Need a new roof or fix existing one? We do it all!</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/concrete.jpeg')} alt=""/>
                                        <div className="figcaption bg-dark">
                                            <h4>Concrete</h4>
                                            <p>Got some concrete you need done? Give us a call.</p>

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

export default Specialization3;