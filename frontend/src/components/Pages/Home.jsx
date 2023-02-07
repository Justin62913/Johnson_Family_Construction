import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About';
//import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';
import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';



const Home = () => {








    /*state = {
        data: []
    }

    async componentDidMount() {
        try {
            const response = await fetch('/api/projects')
            const data = await response.json();
            console.log(data)
            this.setState({data: data})

        }catch(err) {
            console.log(err)
        }




    };*/

        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    <Specialization />
                    <About />
                    <OurMission />
                    <OurServices />
                    <Callus />
                    <OurProject />
                    <Blogs />


                </div>
                <Footer  />


            </>
        );
};

export default Home;