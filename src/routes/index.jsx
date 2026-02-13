import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectDetailsPage from '../components/ProjectDetailsPage';
import TeamMemberDetails from '../components/TeamMemberDetails';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:projectId" element={<ProjectDetailsPage />} />
            <Route path="/team/:memberId" element={<TeamMemberDetails />} />
    </Routes>
  );
};

export default AppRoutes;