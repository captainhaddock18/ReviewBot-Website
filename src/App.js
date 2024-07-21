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
      <div>
        <Header />

        <ScrollContainer className="bg-[#001D21]">
          <Component />

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <img
                src={myImage}
                alt="A descriptive alt text"
                style={{ width: "100%", height: "70%" }} // Adjust style as needed
              />
            </Animator>
          </ScrollPage>

        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/progress" element={<ProgressPage />} /> {/* Route for ProgressPage */}
          <Route exact path="*" element={<NotFound />} />
        </Routes>

          <Hero />

          <Teampage />
        </ScrollContainer>
        <Progress />
        <Projects />
        <Form />

        <Component />

        <Floater />
      </div>
    </Router>
  );
}

export default App;
