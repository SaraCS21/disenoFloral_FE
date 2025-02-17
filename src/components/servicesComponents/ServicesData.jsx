import React from "react";
import { useTranslation } from "react-i18next";
import servicesOptions from "../../constants/servicesOptions";

import "../../styles/services.css";

const ServicesData = () => {
  const { t } = useTranslation();

  return (
    <section className="services-section">
      {servicesOptions.map((service, index) => (
        <div
          key={index}
          className={`services-section__service ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="services-section__service__image">
            <img
              src={`/assets/services/${service.image}`}
              alt={t(service.title)}
            />
          </div>

          <div className="services-section__service__info">
            <h1>{t(service.title)}</h1>
            <p>{t(service.text)}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesData;
