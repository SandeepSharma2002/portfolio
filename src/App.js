import React from "react";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Project";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import "./css/utility.css";

import {  Route, Routes } from "react-router-dom";
import Utility from "./css/Utility";


export default function App() {

  return (
    <div>
      <Navbar />
      <Utility />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route exact path="portfolio" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="resume" element={<Resume />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="skills" element={<Skills />} />
        <Route exact path="projects" element={<Projects />} />
        <Route exact path="experience" element={<Experience />} />
        <Route exact path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
