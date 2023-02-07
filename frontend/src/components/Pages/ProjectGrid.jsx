import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';



class ProjectGrid extends React.Component {
    state = {
        data: []
    }



    async componentDidMount() {
        try {
            const response = await fetch(`/api/projects/`)
            const data = await response.json();
            this.setState({data: data})

        }catch(err) {
            console.log(err)
        }



        /*fetch('http://127.0.0.1:8000/api/projects/')
            .then((response)=>response.json())
            .then((data)=>{
                this.setState({
                    data:data
                })
                console.log(data)
            })*/


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
        }

         loadScript('./static/js/masonary.js');

    };

    render() {

       const projects = this.state.data
        return (
            <>
                <Header/>
                <div className="page-content">
                    <Banner title="Checkout Our latest projects!" pagename="Project Grid" />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            {/* PAGINATION START */}
                            {/*<div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))}
                                </ul>
                            </div>*/}
                            {/* PAGINATION END */}
                            {/* GALLERY CONTENT START */}
                            <div className={"portfolio-wrap mfp-gallery work-grid row clearfix"}>
                                {projects.slice(0,15).map((item, index,id) => (
                                    <div key={index} className={` masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item?.thumb} alt=""/>
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item?.title}</h4>
                                                <p>{item?.description}</p>

                                                <a className="mfp-link" href={item?.image}>
                                                    <i className="fa fa-arrows-alt"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            {/* GALLERY CONTENT END */}

                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                    <div>
                        <br/>
                    </div>
            </>

        );
    };
};

export default ProjectGrid;