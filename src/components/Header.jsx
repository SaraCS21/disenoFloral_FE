import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="header-image"
        style={{
          backgroundImage: `url("/assets/background.jpg")`,
        }}
      ></div>
      <div className="header-info">
        <h1>{t("contact.header")}</h1>
        <p>{t("contact.text")}</p>
      </div>
    </>
  );
};

export default Header;
