import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import {
  Container,
  Carousel,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";

import React, { useState } from "react";

import CarouselImage from "../components/CarouselImage";
import DestinationCard from "../components/CardDestination";
import "../index.css";

function Home() {
  return (
    <div style={{ backgroundColor: "#f3f2ee" , marginBottom:50}}>
      <Carousel>
        <Carousel.Item>
          <CarouselImage src="/src/img/hcm.png" text="First slide" />
          <Carousel.Caption>
            <h1>Hồ Chí Minh</h1>
            <p>
              Được mệnh danh là hòn ngọc Viễn Đông của khu vực Đông Nam Á, Thành
              phố Hồ Chí Minh là một trong hai đô thị quan trọng nhất của Việt
              Nam, đồng thời cũng là trung tâm kinh tế, du lịch, văn hóa, giáo
              dục quan trọng của Việt Nam và khu vực.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src="/src/img/hanoi.png" text="Second slide" />
          <Carousel.Caption>
            <h1>Hà Nội</h1>
            <p>
              Được mệnh danh là “trái tim của Việt Nam”, Thủ Đô Hà Nội lưu giữ
              những vẻ đẹp tuyệt mỹ từ cảnh quan, mang đến cho bạn những cảm
              nhận và những trải nghiệm đa dạng về lịch sử, văn hóa, con người,
              ẩm thực của Việt Nam.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImage src="/src/img/danang.png" text="Third slide" />
          <Carousel.Caption>
            <h1>Đà Nẵng</h1>
            <p>
              Một trong những điểm đến nổi tiếng tại đây là Bà Nà Hill với hệ
              thống cáp treo đơn hiện đại và dài nhất thế giới.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <div className="text-center mt-5">
          <h1 className="mb-5">A community for luxury travellers</h1>

          <div>
            <p className="fs-4" style={{ marginBottom: "0px" }}>
              ASMALLWORLD is the trusted community for modern luxury travellers.
              Find inspiration,
            </p>
            <p className="fs-4">
              book unique journeys, and connect with like-minded members.
            </p>
          </div>
          <ButtonGroup style={{ width: "250px" }}>
            <button
              id="btn_HomeLogin"
              className="btn btn-dark rounded-pill px-4 py-2 fs-5"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
            <Login/>
          </ButtonGroup>
        </div>

        <Row style={{ marginTop: "100px" }}>
          <Col className="d-flex align-items-center" md={6}>
            <div>
              <div>
                <h1 className="mb-4">
                  Travel in style, with exclusive VIP benefits
                </h1>
              </div>
              <p className="w-75 fs-4">
                Indulge in luxury with our curated collection of the world’s
                best hotels and enjoy exclusive VIP benefits, all at no extra
                cost.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <DestinationCard image="/src/img/anh7.png"></DestinationCard>
          </Col>
        </Row>

        <Row style={{ marginTop: "100px" }}>
          <Col md={6}>
            <DestinationCard image="/src/img/anh8.png"></DestinationCard>
          </Col>
          <Col className="d-flex align-items-center" md={6}>
            <div style={{ padding: "10px" }}>
              <h1 className="mb-4">
                Discover new inspiration for your next journey
              </h1>
              <p className="w-75 fs-4">
                Whether it's beautiful destinations or thrilling experiences,
                ignite your wanderlust and discover new reasons to travel and
                explore.
              </p>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: "100px" }}>
          <Col className="d-flex align-items-center" md={6}>
            <div>
              <h1 className="mb-4">
                Belong to a community with a shared passion
              </h1>
              <p className="w-75 fs-4">
                Connect with other members online or at our events and forge
                lasting friendships that transcend borders.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <DestinationCard image="/src/img/anh9.png"></DestinationCard>
          </Col>
        </Row>

        <div className="" style={{ marginTop: "100px" }}>
          <h2 className="text-center mb-4">Member benefits</h2>
          <div className="row g-4 text-center">
            {benefits.map((benefit, index) => (
              <div id="home-member-benefit" className="col-md-4" key={index}>
                <div
                  className="p-4 rounded align-content-center"
                  style={{ height: "220px", backgroundColor: "#f2dfcb" }}
                >
                  <h3>{benefit.title}</h3>
                  <p className="fs-5">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-center my-5">Daily travel inspiration</h2>
        <div className="row g-4">
          {travelItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <divc
                id="home-card"
                className="card"
                style={{ backgroundColor: "#f3f2ee" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body" style={{ height: "250px" }}>
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-text fs-5">{item.description}</p>
                </div>
              </divc>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

const benefits = [
  {
    title: "VIP HOTEL BENEFITS",
    description: "Get room upgrades, hotel credit, and other VIP benefits.",
  },
  {
    title: "GLOBAL COMMUNITY",
    description: "More than 75,000 members in over 100 countries.",
  },
  {
    title: "MORE THAN 800 EVENTS",
    description: "Meet fellow members at our exclusive premium-only events.",
  },
  {
    title: "DAILY TRAVEL INSPIRATION",
    description: "New editorials each day to inspire your next trip.",
  },
  {
    title: "TRAVEL PRIVILEGES",
    description:
      "Enjoy exclusive savings and tier upgrades from trusted travel brands.",
  },
  {
    title: "HOTEL DEALS",
    description:
      "Get free nights at the world's best hotels with our special offers.",
  },
];

const travelItems = [
  {
    image: "/src/img/anh1.png",
    title: "Four Seasons Resort Nevis",
    description: "Explore island life from volcanic peaks to pristine beaches.",
  },
  {
    image: "/src/img/anh2.png",
    title: "Spring Traditions to Have on Your Radar",
    description: "From Bosnian egg-scrambling to Thai water fights.",
  },
  {
    image: "/src/img/anh3.png",
    title: "A Coffee Tour of Auckland",
    description: "New Zealand’s top roasteries, where craft meets flavour.",
  },
  {
    image: "/src/img/anh4.png",
    title: "4 Ancient Architectural Wonders to Visit",
    description:
      "From France to Japan, discover the sites merging spirituality and design.",
  },
  {
    image: "/src/img/anh5.png",
    title: "Thailand’s ‘The White Lotus’ Filming Locations",
    description:
      "Season three of the cult show was shot in Bangkok, Koh Samui and Phuket.",
  },
  {
    image: "/src/img/anh6.png",
    title: "Last-Minute Spring Holidays",
    description: "These getaways combine sea, snow and serenity.",
  },
];

export default Home;
