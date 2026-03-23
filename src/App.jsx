import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename='/new'>
      <div className="min-h-screen">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;