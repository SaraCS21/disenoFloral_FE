import { useState } from "react";
import "../styles/adminNavbar.css";

import { IoIosArrowDown } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const AdminNavbar = ({ subNavbarName }) => {
  const { t } = useTranslation();

  // TODO: consulta a la BBDD para obtener al usuario
  // TODO: modificar para que mira si el usuario tiene imagen, no si existe
  const [isUser, setIsUser] = useState(false);

  return (
    <section className="admin-section">
      <nav className="admin-navbar">
        <div className="admin-navbar__logo">
          <img
            className="admin-navbar__logo__image"
            src="/assets/logo/logo-black.png"
            alt="logo"
          />
        </div>

        <div className="admin-navbar__user">
          <div className="admin-navbar__user__image">
            {!isUser ? (
              <FaUserLarge />
            ) : (
              <img src={`${isUser}`} alt="user image" />
            )}
          </div>

          <div className="admin-navbar__user__name">
            <p>User name</p>
            <IoIosArrowDown />
          </div>
        </div>
      </nav>

      <nav className="admin-sub-navbar">
        <h1>{t(subNavbarName)}</h1>
      </nav>
    </section>
  );
};

export default AdminNavbar;
