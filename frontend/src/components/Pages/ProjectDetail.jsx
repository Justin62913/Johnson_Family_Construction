import React, {useState, useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';





const ProjectDetail = () => {




    const { id } = useParams()
    const [project, setProject] = useState([])





    const fetchData = async () => {
        fetch(`/api/projects/${id}/`)
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

    /*useEffect(() => {
        return () => {
            getProject()
        };
    }, []);
    let getProject = async () => {
        let res = await fetch(`/api/project/${id}`)
        let data = await res.json();
        console.log(data)
        setProject(data)
    }*/




        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Helping you and your house become better acquainted." pagename="Project Detail" />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">

                            <div key={project.id} className="project-detail-outer">

                                <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={project.thumb} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={project.thumb} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={project.thumb} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b30">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-block">
                                                <div className="row">
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Date</h4>
                                                        <p>{project.created}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">{project.title}</h3>
                                        <p> {project.description}</p>

                                        <div className="m-b0">
                                            <div className="mt-divider divider-1px  bg-black"><i className="icon-dot c-square" /></div>
                                        </div>
                                        <ul className="social-icons social-square social-darkest m-b0">
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}

                </div>



                <Footer />
            </>
        );

};

export default ProjectDetail;