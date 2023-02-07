import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: `Building Construction`,
        icon: require('./../../images/icon/crane-1.png'),
        description: 'Need some framing done we can do that.',
    },
    {
        count: 2,
        title: 'Building Roofing',
        icon: require('./../../images/icon/renovation.png'),
        description: 'Need a roof put on your house give us a call.',
    },
    {
        count: 3,
        title: 'Concrete',
        icon: require('./../../images/icon/toolbox.png'),
        description: 'Need some new concrete or update existing concrete give us a call.',
    },
    {
        count: 4,
        title: 'Building Siding',
        icon: require('./../../images/icon/compass.png'),
        description: 'Need some siding put on your house give us a call.',
    }
]

var img1 = require('./../../images/background/bg-6.png');

class OurServices extends React.Component {
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
        return (
            <>
                <div className="section-full mobile-page-padding  p-b50  square_shape2">
                    <div className="section-content">
                        <div className="Service-half-top p-t80  bg-dark bg-moving" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                            <div className="container">
                                {/* TITLE START */}
                                <div className="section-head text-white">
                                    <div className="mt-separator-outer separator-left">
                                        <div className="mt-separator">
                                            <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Services</h2>
                                        </div>
                                    </div>
                                    <h3>No matter the repair or new project please give us a call</h3>
                                </div>
                                {/* TITLE END */}
                            </div>
                        </div>
                        <div className="services-half-bottom">
                            <div className="container">
                                <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-3 col-sm-6" key={index}>
                                            <div className="mt-icon-box-wraper m-b30">
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
};

export default OurServices;