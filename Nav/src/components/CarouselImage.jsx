import { Image } from "react-bootstrap";

function CarouselImage({ src, text }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-dark"
      style={{ height: "400px", width: "100%" }}
    >
      <Image src={src} alt={text} className="w-100 h-100 object-fit-cover" />
    </div>
  );
}

export default CarouselImage;
