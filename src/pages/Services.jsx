import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Servicios</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default Services;
