import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import ProjectDetail from './Pages/ProjectDetail';
import ProjectGrid from './Pages/ProjectGrid';
import ScrollToTop from './Common/ScrollToTop';

class Components extends React.Component {
    render() {
        return (
            <HashRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home />} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/services' element={<Services/>} />
                            <Route path='/contactus' element={<ContactUs/>} />
                            <Route path='/project-detail/:id' element={<ProjectDetail/>} />
                            <Route path='/project-grid' element={<ProjectGrid/>} />
                            <Route element={<Error/>} />
                        </Routes>
                </div>
            </HashRouter>
        );
    };
};

export default Components;