import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Contacto</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default Contact;
