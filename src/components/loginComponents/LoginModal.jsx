import React from "react";
import "../../styles/loginModal.css";
import { useModal } from "../../contexts/ModalContext";
import { useTranslation } from "react-i18next";

const LoginModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const { t } = useTranslation();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-image"></div>
        <div className="modal-form">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          <h2>{t("login.title")}</h2>
          <form>
            <label htmlFor="email">{t("login.email_label")}</label>
            <input
              type="email"
              id="email"
              placeholder={t("login.email_placeholder")}
            />
            <label htmlFor="password">{t("login.password_label")}</label>
            <input
              type="password"
              id="password"
              placeholder={t("login.password_placeholder")}
            />
            <button type="submit">{t("login.send")}</button>
          </form>
          <p className="register-link">
            {t("login.without_account")} <a href="#">{t("login.register")}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
