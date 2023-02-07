import React from 'react';

var img1 = require('./../../images/background/bg-6.png');
// var img2 = require('./../../media/background/line.png');

class AboutSummary extends React.Component {
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
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}

                        {/* TITLE END */}

                    </div>
                </div>
            </>
        );
    }
};

export default AboutSummary;