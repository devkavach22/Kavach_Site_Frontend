import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar/>
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;