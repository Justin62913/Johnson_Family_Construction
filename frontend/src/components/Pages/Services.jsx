import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import AboutCompany from '../Elements/AboutCompany';
import Specialization3 from '../Elements/Specialization3';
import OurServices3 from '../Elements/OurServices3';
import OurValue3 from '../Elements/OurValue3';
import OurProject3 from '../Elements/OurProject3';




class Services extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Different Services. Unchanging Quality." pagename="Services" />
                    <AboutCompany />
                    <Specialization3 />
                    <OurServices3 />
                    <OurValue3 />
                    <OurProject3 />

                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default Services;