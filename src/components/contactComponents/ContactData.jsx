import React from "react";
import MyMap from "./MyMap";

import { FaPhone, FaLocationDot, FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

import "../../styles/contact.css";

const ContactData = () => {
  return (
    <div className="contact-data">
      <h2>Las Palmas de Gran Canaria</h2>

      <section>
        <MyMap />
      </section>

      <section className="contact-data__info">
        <div>
          <FaLocationDot />
          <p>C/ Angel Guerra, 2, Las Palmas de Gran Canaria 35003</p>
        </div>

        <div>
          <FaPhone />
          <p>+34 636358758</p>
        </div>

        <div>
          <MdEmail />
          <p>elarriateflores@gmail.com</p>
        </div>

        <div className="contact-data__info__social-media">
          <a href="https://www.instagram.com/el_arriate_flores_y_mas_flores/">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactData;
