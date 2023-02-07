import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/building.jpeg'),
    require('./../../images/gallery/concrete.jpeg'),
    require('./../../images/gallery/roof-3.jpeg'),
    require('./../../images/gallery/build_4.jpg'),
    require('./../../images/gallery/roof-1.jpeg')
]

var bnr1 = require('./../../images/background/bg-6.png');

class About extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./static/js/masonary.js');
      
    };
    render() {
        const options = {
            loop:true,
            autoplay:true,
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                991:{
                    items:1
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">About</span> Company</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <OwlCarousel className="owl-carousel about-home owl-btn-vertical-center" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="mt-img-effect zoom-slow">
                                                <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                </div>
                                            </div>
                                            
                                        ))}
                                       
                                    </OwlCarousel>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="about-home-right bg-white p-a30">
                                        <h3 className="m-t0"><span className="font-weight-100">Committed</span> to superior quality and  results.</h3>
                                        <p><strong>Johnson Family Construction was established in 2019, with many years
                                            of hard work and experience was the dream born to start our own family business.</strong></p>

                                        <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
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

export default About;