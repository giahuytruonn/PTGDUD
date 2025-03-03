import { Card } from "react-bootstrap";

function DestinationCard({ image, title }) {
  return (
    <Card className="destination-card border-0 shadow-sm">
      <Card.Img src={image} alt={title} className="destination-image" />
      <Card.ImgOverlay className="d-flex align-items-end">
        <Card.Title className="text-white fw-bold">{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default DestinationCard;
