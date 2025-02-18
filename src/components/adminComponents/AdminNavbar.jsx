import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormModal from "./FormModal";
import useGetUserData from "../../hooks/useGetUserData";

import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";

import "../../styles/adminNavbar.css";

const AdminNavbar = ({ subNavbarName, subNavbarOption, addNewItem }) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useGetUserData();

  const handleCreateClick = () => {
    setIsModalOpen(true);
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

        <div className="admin-navbar__user">
          <div className="admin-navbar__user__image">
            {userData ? <FaUserLarge /> : <img src="" alt="user image" />}
          </div>

          <div className="admin-navbar__user__name">
            <p>
              {userData
                ? `${userData.firstName} ${userData.lastName}`
                : "User name"}
            </p>
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
