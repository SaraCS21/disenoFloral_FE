import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbarComponents/Navbar";
import Footer from "../components/footerComponents/Footer";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>Sobre nosotros</h1>
      <p>{t("example_text")}</p>
      <Footer />
    </div>
  );
};

export default About;
