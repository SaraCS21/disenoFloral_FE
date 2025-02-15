import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/ourWorks.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ourWorksOptions } from "../../constants/ourWorksOptions";

export default function OurWorks() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ourWorksOptions.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + ourWorksOptions.length) % ourWorksOptions.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="our-works">
      <h1>{t("Algunos de nuestros trabajos")}</h1>

      <div className="our-works__carousel">
        <button className="our-works__carousel--prev" onClick={goToPrevious}>
          <IoIosArrowBack />
        </button>
        <div className="our-works__carousel--images">
          <img src={ourWorksOptions[currentIndex]} alt="work image" />
        </div>
        <button className="our-works__carousel--next" onClick={goToNext}>
          <IoIosArrowForward />
        </button>
      </div>

      <div className="our-works__carousel__dots">
        {ourWorksOptions.map((_, index) => (
          <span
            key={index}
            className={`${currentIndex === index ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
