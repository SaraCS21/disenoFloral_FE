import { useTranslation } from "react-i18next";
import { carouselImages } from "../../constants/carouselImages";
import "../../styles/carousel.css";

export default function Carousel() {
  const { t } = useTranslation();

  return (
    <div className="carousel">
      <div className="carousel-content--wrapper">
        <div className="carousel-content">
          <p>{t("home.header")}</p>
        </div>
      </div>

      <div className="carousel-track">
        {[...carouselImages, ...carouselImages].map((img, i) => (
          <img key={i} src={img} alt={`Imagen carrusel ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
