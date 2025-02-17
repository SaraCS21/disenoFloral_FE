import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      action={process.env.REACT_APP_EMAILJS_URL}
      method="POST"
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <div className="contact-form__fields">
        <div className="contact-form__field">
          <label>{t("contact.name")}:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__field">
          <label>{t("contact.surname")}:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__fields">
        <div className="contact-form__field">
          <label>{t("contact.email")}:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__fields">
        <div className="contact-form__field">
          <label>{t("contact.message")}:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__button">
        <button type="submit">{t("contact.send_message")}</button>
      </div>
    </form>
  );
};

export default ContactForm;
