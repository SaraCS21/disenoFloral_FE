import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import navbarOptions from "../constants/navbarOptions";
import "../styles/navbar.css";

import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Logo</Link>
      </div>

      <div className="navbar__menu">
        <ul className="navbar__menu-list-item">
          {navbarOptions.map((option, index) => (
            <li key={index} className="navbar__menu-item">
              <Link to={option.url}>{t(option.nameKey)}</Link>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </div>

      <div className="navbar__right-section">
        <button className="navbar__login-button">
          <FiUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
