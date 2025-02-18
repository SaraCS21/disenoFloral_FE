import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FormModal from "./FormModal";
import useGetUserData from "../../hooks/useGetUserData";
import useAuth from "../../hooks/useAuth";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

import "../../styles/adminNavbar.css";

const AdminNavbar = ({ subNavbarName, subNavbarOption, addNewItem }) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userData = useGetUserData();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/");
  };

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

        <div className="admin-navbar__user" onClick={handleUserClick}>
          <div className="admin-navbar__user__image">
            {userData ? <FaUserLarge /> : <img src="" alt="user image" />}
          </div>

          <div className="admin-navbar__user__name">
            <p>
              {userData
                ? `${userData.firstName} ${userData.lastName}`
                : "User name"}
            </p>
            {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
          </div>
        </div>

        {isDropdownOpen && (
          <div className="admin-navbar__user__submenu">
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </nav>

      <nav className="admin-sub-navbar">
        <h1
          style={{ width: `${subNavbarOption !== "default" ? "50%" : "100%"}` }}
        >
          {t(subNavbarName)}
        </h1>

        {subNavbarOption !== "default" && (
          <div>
            <button
              className="admin-sub-navbar__create"
              onClick={handleCreateClick}
            >
              <FaPlus />
            </button>
          </div>
        )}
      </nav>

      <FormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        subNavbarOption={subNavbarOption}
        addNewItem={addNewItem}
      />
    </section>
  );
};

export default AdminNavbar;
