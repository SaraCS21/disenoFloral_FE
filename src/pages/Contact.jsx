import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbarComponents/Navbar";
import Footer from "../components/footerComponents/Footer";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>Contacto</h1>
      <p>{t("example_text")}</p>
      <Footer />
    </div>
  );
};

export default Contact;
