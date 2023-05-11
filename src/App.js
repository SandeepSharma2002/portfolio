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
        <Route path="*" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="services" element={<Services />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
