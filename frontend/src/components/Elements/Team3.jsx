import React from 'react';


const teamMembers = [
    {
        image: require('./../../images/our-team4/Jon.jpg'),
        membername: 'Jon Johnson',
        position: 'Owner & Founder'
    },
    {
        image: require('./../../images/our-team4/Logan.jpg'),
        membername: 'Logan Gross',
        position: 'Contractor'
    },
    {
        image: require('./../../images/our-team4/Justin.jpeg'),
        membername: 'Justin Johnson',
        position: 'Contractor'
    }
]

class Team3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Team</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE Team START */}
                        <div className="section-content">
                            <div className="row">
                                {teamMembers.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                        <div className="our-team-1 hover-animation-1">
                                            <div className="profile-image scale-in-center"><img src={item.image} alt="" /></div>
                                            <div className="figcaption">
                                                <h4>{item.membername}</h4>
                                                <h5>{item.position}</h5>
                                                <p>This is our top notch team. We are all dedicated to quality and satisfaction.</p>
                                                <div className="icons">
                                                    <a href={"https://www.facebook.com/profile.php?id=100086254351662"} ><i className="fa fa-facebook" /></a>
                                                </div>
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

export default Team3;