import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Component from "./Carousel";
import Floater from "./floater";
import Hero from "./hero";
import NotFound from "./NotFound";
import Progress from "./progress";
import Teampage from "./teampage";
import Projects from "./projects";
import Form from "./form";
import myImage from "./assets/moai.png";
import Framer from "./fade";
import Team from "./Team.js"
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import React from "react";
import "./App.css";
import ProgressPage from "./ProgressPage"; // Import the new ProgressPage component
import Home from "./Home.js";
function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const FastFadeUp = batch(
    Fade({ from: 0, to: 1, duration: 5 }),
    Sticky(),
    MoveOut(0, -200)
  );
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/progress" element={<ProgressPage />} /> {/* Route for ProgressPage */}
      </Routes>
    

    </Router>
  );
}

export default App;
