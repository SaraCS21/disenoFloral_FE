import React from "react";

import Navbar from "../components/navbarComponents/Navbar";
import Carousel from "../components/homeComponents/Carousel";
import Footer from "../components/footerComponents/Footer";
import EventsHome from "../components/homeComponents/EventsHome";
import OurWorks from "../components/homeComponents/OurWorks";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />

      <EventsHome />
      <OurWorks />

      <Footer />
    </div>
  );
};

export default Home;
