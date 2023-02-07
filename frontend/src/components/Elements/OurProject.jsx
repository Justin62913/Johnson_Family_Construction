import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';




const ProjectGrid = () => {

    const [projects, setProject] = useState([])


    const fetchData = async () => {
        fetch(`/api/projects/`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProject(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])





    /*state = {
        data: []
    }*/


        /*try {
            const response = await fetch('/api/projects')
            const data = await response.json();
            console.log(data)
            this.setState({data: data})

        }catch(err) {
            console.log(err)
        }*/


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




        return (
            <>
                <div  className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Projects</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div  className=" row mfp-gallery product-stamp clearfix">
                                {/* COLUMNS 1 */}{/*
                                <div className="stamp col-md-3 col-sm-6 m-b30">
                                    <div className="bg-gray p-a30">
                                        <div className="filter-wrap">
                                            <ul className="filter-navigation masonry-filter text-uppercase">
                                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                                {filters.map((item, index) => (
                                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>*/}
                                {/* COLUMNS 2 */}
                                {projects.slice(0, 4).map((item, index) => (
                                   <div key={index} className={` masonry-item col-sm-6 m-b30`}>
                                        <div className="mt-box   image-hover-block">
                                            <div className="mt-thum-bx">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="mt-info  p-t20 text-white">
                                                <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                                <p className="m-b0">{item.description}</p>
                                            </div>
                                            <NavLink to="/project-grid"></NavLink>
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

export default ProjectGrid;