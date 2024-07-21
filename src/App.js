import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Floater from "./floater";
import Hero from "./hero";
import Performance from "./performance.js";
import NotFound from "./NotFound";
import Progress from "./progress";
import Teampage from "./teampage";
import Projects from "./projects";

import Team from "./Team.js"

import React from "react";
import "./App.css";
import ProgressPage from "./ProgressPage"; // Import the new ProgressPage component
import Home from "./Home.js";
function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/team" element={<Team />} />
        <Route path="/progress" element={<ProgressPage />} /> {/* Route for ProgressPage */}
      </Routes>
      <Floater />
    

    </Router>
  );
}

export default App;
