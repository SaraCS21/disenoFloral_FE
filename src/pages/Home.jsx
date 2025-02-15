import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbarComponents/Navbar";
import Carousel from "../components/homeComponents/Carousel";
import Footer from "../components/footerComponents/Footer";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <Carousel />
      <h1>Home</h1>
      <p>{t("example_text")}</p>
      <Footer />
    </div>
  );
};

export default Home;
