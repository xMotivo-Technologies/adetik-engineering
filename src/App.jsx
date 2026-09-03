import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import ScrollToTop from "./components/ScrollToTop";
import PlantEquipment from "./pages/PlantEquiment";
import Services from "./pages/Services";
import Projects from "./pages/Projects";


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/about" element = {<About />} />
        <Route path="/team" element = {<Team />} />
        <Route path="/equipment" element = {<PlantEquipment />} />
        <Route path="/services" element = {<Services />} />
        <Route path="/projects" element = {<Projects />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
