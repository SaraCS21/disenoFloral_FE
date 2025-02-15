import React from "react";
import Navbar from "../components/navbarComponents/Navbar";
import Carousel from "../components/homeComponents/Carousel";
import Footer from "../components/footerComponents/Footer";
import EventsHome from "../components/homeComponents/EventsHome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />

      <EventsHome />

      <Footer />
    </div>
  );
};

export default Home;
