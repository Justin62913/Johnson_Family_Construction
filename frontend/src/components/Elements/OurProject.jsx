import React from 'react';
import { NavLink } from 'react-router-dom';




class ProjectGrid extends React.Component {
    state = {
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
                <div className="page-content">

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
                            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                                {projects.slice(0,3).map((item, index) => (
                                    <div key={index} className={`${item?.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.image} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item?.title}</h4>
                                                <p>{item?.description}</p>
                                                <NavLink to={`/project-detail/${item?.id}`} className="read-more site-button btn-effect">Read More</NavLink>
                                                <a className="mfp-link" href={item?.image}>
                                                    <i className="fa fa-arrows-alt" />
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

            </>
        );
    };
}

export default ProjectGrid;