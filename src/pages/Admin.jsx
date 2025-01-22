import React from "react";
import { useTranslation } from "react-i18next";

const Admin = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Admin</h1>
      <p>{t("example_text")}</p>
    </div>
  );
};

export default Admin;
