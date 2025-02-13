import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";

import "../../styles/adminNavbar.css";

const AdminNavbar = ({ subNavbarName, subNavbarOption }) => {
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
        <h1
          style={{ width: `${subNavbarOption !== "default" ? "50%" : "100%"}` }}
        >
          {t(subNavbarName)}
        </h1>

        {subNavbarOption !== "default" && (
          <div>
            <button>
              <FaPlus />
            </button>
          </div>
        )}
      </nav>
    </section>
  );
};

export default AdminNavbar;
