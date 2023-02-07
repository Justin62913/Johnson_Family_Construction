import React from 'react';




/*const projects = [
    {
        image: require('./../../media/services/service-projects/shooping-mall.jpg'),
        title: 'Shopping Mall',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-1'
    },
    {
        image: require('./../../media/services/service-projects/hospital.jpg'),
        title: 'Hospital Building',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2'
    },
    {
        image: require('./../../media/services/service-projects/garden-house.jpg'),
        title: 'Garden House',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3'
    },
    {
        image: require('./../../media/services/service-projects/villa.jpg'),
        title: 'Villa',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: require('./../../media/services/service-projects/road-construction.jpg'),
        title: 'Road Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-5'
    },
    {
        image: require('./../../media/services/service-projects/bridge.jpg'),
        title: 'Bridge Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: require('./../../media/services/service-projects/building-ren.jpg'),
        title: 'Building Renovation',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3'
    },
    {
        image: require('./../../media/services/service-projects/dam-construction.jpg'),
        title: 'Dam Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2'
    },
]*/

var img1 = require('./../../images/background/bg5.jpg');

class OurProject3 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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
                <div className="section-full p-t80 p-b50 bg-parallax bg-cover mobile-page-padding" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">

                    </div>
                </div>
            </>
        );
    }
};

export default OurProject3;