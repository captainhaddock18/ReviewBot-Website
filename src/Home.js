import React from "react";
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
import Team from "./Team.js";
import Performance_home from "./performance_home.js";
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
import "./App.css";
import ProgressPage from "./ProgressPage"; // Import the new ProgressPage component

export default function Home() {
  return (
    <div>
      <ScrollContainer className="bg-[#001D21]">
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <img
              src={myImage}
              alt="A descriptive alt text"
              style={{ width: "100%", height: "70%" }} // Adjust style as needed
            />
          </Animator>
        </ScrollPage>

        <Hero />

        <Teampage />
      </ScrollContainer>
      <Progress />
      <Performance_home />
      <Projects />
      <Form />

      <Component />
    </div>
  );
}
