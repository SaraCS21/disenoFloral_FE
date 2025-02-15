import "../../styles/carousel.css";

const images = [
  "/assets/carouselImage1.jpg",
  "/assets/carouselImage2.jpg",
  "/assets/carouselImage3.jpg",
  "/assets/carouselImage4.jpg",
  "/assets/carouselImage5.jpg",
];

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} alt={`Imagen carrusel ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
