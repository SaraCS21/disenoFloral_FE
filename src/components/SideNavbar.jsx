import { useState } from "react";
import { useTranslation } from "react-i18next";
import sidebarOptions from "../constants/sidebarOptions";
import "../styles/sideNavbar.css";

import { FaUserLarge } from "react-icons/fa6";

const SideNavBar = ({ setSubNavbarName }) => {
  // TODO: consulta a la BBDD para obtener al usuario
  // TODO: modificar para que mira si el usuario tiene imagen, no si existe
  const [isUser, setIsUser] = useState(false);

  const { t } = useTranslation();

  const handleOptionClick = (optionName) => {
    setSubNavbarName(optionName);
  };

  return (
    <div
      className="navbar-side"
      style={{ backgroundImage: 'url("/assets/background.jpg")' }}
    >
      <div className="navbar-side__user">
        <div className="navbar-side__user__image">
          {!isUser ? (
            <FaUserLarge />
          ) : (
            <img src={`${isUser}`} alt="user image" />
          )}
        </div>

        <div className="navbar-side__user__data">
          <p className="navbar-side__user__data--name">User name</p>
          <p className="navbar-side__user__data--role">Rol</p>
        </div>
      </div>

      <ul className="navbar-side__options">
        {sidebarOptions.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option.nameKey)}>
            {option.icon}
            <p>{t(option.nameKey)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
