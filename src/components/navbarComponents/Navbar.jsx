import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import navbarOptions from "../../constants/navbarOptions";
import "../../styles/navbar.css";

import { FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/assets/logo/logo-white.png" alt="logo" />
        </Link>
      </div>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiMenu />
      </button>

      <div className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
        {menuOpen ? (
          <button
            className="navbar__menu-close"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
        ) : (
          ""
        )}

        <ul className="navbar__menu-list-item">
          {navbarOptions.map((option, index) => (
            <li key={index} className="navbar__menu-item">
              <Link to={option.url} onClick={() => setMenuOpen(false)}>
                {t(option.nameKey)}
              </Link>
            </li>
          ))}

          <li className="navbar__menu-item navbar__menu-item--mobile">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <FiUser /> {t("login")}
            </Link>
          </li>
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
