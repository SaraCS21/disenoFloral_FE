import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default Home;
