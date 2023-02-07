import React from 'react';
// import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: `Building Construction`,
        flaticon: 'flaticon-city',
        description: 'Need some framing done we can do that.',
    },
    {
        count: 2,
        title: 'Building Roofing',
        flaticon: 'flaticon-paint',
        description: 'Need a roof put on your house give us a call.',
    },
    {
        count: 3,
        title: 'Building Siding',
        flaticon: 'flaticon-crane',
        description: 'Need some siding put on your house give us a call.',
    },
    {
        count: 4,
        title: 'Concrete',
        flaticon: 'flaticon-decorating',
        description: 'Need some new concrete or update existing concrete give us a call.',
    },

]

var img1 = require('./../../images/background/bg-5.png');
var img2 = require('./../../images/background/line.png');

class OurServices3 extends React.Component {
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
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">All</span> Services</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                            {services.map((item, index) => (
                                <div key={index} className="col-md-3 col-sm-8">
                                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                            <span className="icon-cell text-secondry"><i className={item.flaticon} /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                            <p>{item.description}</p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServices3;