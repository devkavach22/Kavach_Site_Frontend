import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import ContactPage from '../components/ContactPage';
import CareerPage from '../components/CareerPage';
import Services from '../components/Services';
import About from '../components/About';
import Awards from '../components/Awards';
import Product from '../components/Product';

import ICTDetailPage from "../components/ICTDetailPage";
import Facility from '../components/Facility';
import Security from '../components/Security';
import EPCDetails from '../components/EPCDetails';
import Software from '../components/Software';
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
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/awards' element={<Awards />} />

        <Route path="/ITCdetails" element={<ICTDetailPage />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/security" element={<Security />} />
        <Route path="/epc" element={<EPCDetails />} />
        <Route path="software" element={<Software />} />
      </Routes>
    </>
  );
};

export default AppRoutes;