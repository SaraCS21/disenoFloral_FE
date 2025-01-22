import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Home</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default Home;
