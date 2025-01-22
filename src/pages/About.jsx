import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Sobre nosotros</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default About;
