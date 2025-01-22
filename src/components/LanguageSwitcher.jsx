import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import languages from "../constants/languages";
import "../styles/languageSwitcher.css";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "es";

  const selectedLanguage = useMemo(
    () => languages.find((lang) => lang.code === currentLanguage),
    [currentLanguage]
  );

  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="language-selector">
      <div className="language-selector__selected">
        <span>{selectedLanguage?.flag || "🌍"}</span>
        <span>{selectedLanguage ? t(selectedLanguage.nameKey) : ""}</span>
      </div>
      <ul className="language-selector__list">
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
