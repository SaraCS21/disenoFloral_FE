import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbarComponents/Navbar";
import Carousel from "../components/homeComponents/Carousel";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Home;
