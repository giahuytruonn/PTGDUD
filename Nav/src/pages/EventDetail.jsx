import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Carousel, Row, Col, Button, Card } from "react-bootstrap";
import { eventdetail } from "../assets/data";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventdetails = eventdetail(); // Sử dụng đúng kiểu dữ liệu
  const event = eventdetails.find((e) => e.id === parseInt(id)); // Chuyển id sang số

  if (!event) {
    return (
      <Container className="mt-4">
        <h2>Event not found</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={event.image1}
                alt="First slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={event.image2}
                alt="First slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={event.image3}
                alt="First slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>

          <Card className="mt-3 p-3 d-flex">
            <div className="col-6">
              <h2>{event.name}</h2>
              <p>{event.review}</p>
              <img
                style={{ height: "167px", width: "167px" }}
                src="https://dv4xo43u9eo19.cloudfront.net/assets/asw_logo-60a88b85d6463eaacca2dee3b30ef0889274a5c6dc61e296a3fe91dcc381cc6a.jpg"
              ></img>
              <p className="text-primary fw-bold mx-3">ASW Events Team</p>
            </div>
            <div className="col-6">
                {event.description}
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 mb-3">
            <h5>EVENT INFORMATION</h5>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Attendees:</strong> {event.attendees} people
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EventDetail;
