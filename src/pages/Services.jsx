import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbarComponents/Navbar";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>Servicios</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default Services;
