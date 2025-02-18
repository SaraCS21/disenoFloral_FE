import { useTranslation } from "react-i18next";
import sidebarOptions from "../../constants/sidebarOptions";
import useGetUserData from "../../hooks/useGetUserData";

import { FaUserLarge } from "react-icons/fa6";
import "../../styles/sideNavbar.css";
import { useMemo } from "react";

const SideNavBar = ({ setSubNavbarName, setSubNavbarOption }) => {
  const { t } = useTranslation();
  const userData = useGetUserData();

  // Filtrar las opciones según el rol del usuario
  const filteredOptions = useMemo(() => {
    if (userData?.role === "Professional") {
      return sidebarOptions.filter((option) =>
        ["events", "eventLocations", "invoices"].includes(option.option)
      );
    }
    return sidebarOptions;
  }, [userData]);

  const handleOptionClick = (optionName, option) => {
    setSubNavbarName(optionName);
    setSubNavbarOption(option);
  };

  return (
    <div
      className="navbar-side"
      style={{ backgroundImage: 'url("/assets/background.jpg")' }}
    >
      <div className="navbar-side__user">
        <div className="navbar-side__user__image">
          {userData ? <FaUserLarge /> : <img src="" alt="user image" />}
        </div>

        <div className="navbar-side__user__data">
          <p className="navbar-side__user__data--name">
            {userData
              ? `${userData.firstName} ${userData.lastName}`
              : "User name"}
          </p>
          <p className="navbar-side__user__data--role">
            {userData ? userData.role : "User role"}
          </p>
        </div>
      </div>

      <ul className="navbar-side__options">
        {filteredOptions.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option.nameKey, option.option)}
          >
            {option.icon}
            <p>{t(option.nameKey)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
