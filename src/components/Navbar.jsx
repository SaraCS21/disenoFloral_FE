import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import navbarOptions from "../constants/navbarOptions";
import "../styles/navbar.css";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/path-to-logo.png" alt="Logo" />
        </Link>
      </div>

      <div className="navbar__menu">
        <ul>
          {navbarOptions.map((option, index) => (
            <li key={index} className="navbar__menu-item">
              <Link to={option.url}>{t(option.nameKey)}</Link>
            </li>
          ))}
        </ul>
      </div>

      <LanguageSwitcher />

      <div className="navbar__right-section">
        <button className="navbar__login-button">{t("buttons.login")}</button>
      </div>
    </nav>
  );
};

export default Navbar;
