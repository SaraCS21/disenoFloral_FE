import React from "react";
import { useTranslation } from "react-i18next";
import languages from "../constants/languages";
import "../styles/languageSwitcher.css";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || "es";

  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const selectedLanguage = languages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div className="language-selector">
      <div className="selected-language">
        <span>
          {languages.find((lang) => lang.code === currentLanguage)?.flag ||
            "🌍"}
        </span>
        <span>{selectedLanguage ? t(selectedLanguage.nameKey) : ""}</span>
      </div>
      <ul className="language-list">
        {languages.map((lang) => (
          <li
            key={lang.code}
            onClick={() => handleChangeLanguage(lang.code)}
            className={lang.code === currentLanguage ? "active" : ""}
          >
            <span>{lang.flag}</span>
            <span>{t(lang.nameKey)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
