import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "../../styles/darkModeSwitcher.css";

const DarkModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <button className="dark-mode-switcher" onClick={toggleDarkMode}>
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkModeSwitcher;
