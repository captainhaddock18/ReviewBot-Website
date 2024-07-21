import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Component from './Carousel';
import Floater from './floater';
import Hero from './hero';
import NotFound from './NotFound';
import Teampage from './teampage';
import ProgressPage from './ProgressPage'; // Import the new ProgressPage component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Component />
        
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/progress" element={<ProgressPage />} /> {/* Route for ProgressPage */}
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        
        <Teampage />
        <Floater />
      </div>
    </Router>
  );
}

export default App;
