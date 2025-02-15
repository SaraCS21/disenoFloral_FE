import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  socialMediaOptions,
  privacyLinkOptions,
} from "../../constants/footerOptions";

import "../../styles/footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__social-icons">
          {socialMediaOptions.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icons--media"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <img
          src="../../../assets/logo/logo-black.png"
          alt="Logo"
          className="footer__logo"
        />
        <div className="footer__legal">
          {privacyLinkOptions.map((link) => (
            <Link
              key={link.nameKey}
              to={link.url}
              className="footer__legal-link"
            >
              {t(link.nameKey)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
