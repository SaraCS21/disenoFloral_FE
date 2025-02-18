import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AppRoutes;
