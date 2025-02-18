import { React, useState } from "react";
import "../../styles/loginModal.css";
import useAuth from "../../hooks/useAuth";
import { login } from "../../services/authService";
import { useTranslation } from "react-i18next";
import { useModal } from "../../contexts/ModalContext";

const LoginModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const { login: loginAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      loginAuth(response.user);
      closeModal();
    } catch (error) {
      console.error("Error en login", error);
      alert(t("login.error"));
    }
  };

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
          <form onSubmit={handleLogin}>
            <label htmlFor="email">{t("login.email_label")}</label>
            <input
              type="email"
              id="email"
              placeholder={t("login.email_placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">{t("login.password_label")}</label>
            <input
              type="password"
              id="password"
              placeholder={t("login.password_placeholder")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
