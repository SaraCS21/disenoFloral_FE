import React, { useMemo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import languages from "../../constants/languages";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import "../../styles/languageSwitcher.css";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentLanguage = i18n.language || "es";

  const selectedLanguage = useMemo(
    () => languages.find((lang) => lang.code === currentLanguage),
    [currentLanguage]
  );

  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <div
        className={`language-selector__selected ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedLanguage?.flag || ""} alt="flag" />
        <span>
          {selectedLanguage ? selectedLanguage.code.toUpperCase() : ""}
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>

      {isOpen && (
        <ul className="language-selector__list">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={lang.code === currentLanguage ? "active" : ""}
            >
              <img src={lang.flag} alt={`${lang.name} flag`} />
              <span>{t(lang.nameKey)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
