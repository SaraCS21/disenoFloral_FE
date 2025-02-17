import React from "react";
import Navbar from "../components/navbarComponents/Navbar";
import Footer from "../components/footerComponents/Footer";
import Header from "../components/Header";
import ServicesData from "../components/servicesComponents/ServicesData";

const Services = () => {
  return (
    <div>
      <Navbar />
      <Header translation="services" />

      <ServicesData />

      <Footer />
    </div>
  );
};

export default Services;
