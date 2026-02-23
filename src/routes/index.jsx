import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectDetailsPage from '../components/ProjectDetailsPage';
import TeamMemberDetails from '../components/TeamMemberDetails';
import ContactPage from '../components/ContactPage';
import CareerPage from '../components/CareerPage';
import JobDetails from '../components/JobDetails';
import LanguageDetails from '../components/LanguageDetails';
import Services from '../components/Services';
import About from '../components/About';
import Awards from '../components/Awards';
import Product from '../components/Product';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Career Routes */}
        <Route path="/career" element={<CareerPage />} />
        <Route path="/career/job/:jobId" element={<JobDetails />} />
        <Route path="/career/technologies" element={<LanguageDetails />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/product'element={<Product/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/awards' element={<Awards/>}/>
        <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/team/:memberId" element={<TeamMemberDetails />} />
      </Routes>
    </>
  );
};

export default AppRoutes;