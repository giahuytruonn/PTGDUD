import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  Button,
  Navbar,
  Nav,
  Carousel,
  Row,
  Col,
} from "react-bootstrap";

import CarouselImage from "../components/CarouselImage";
import DestinationCard from "../components/CardDestination";

function Home() {
  return (
    <Container className="mt-4">
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

      <h1 className="text-center">KHÁM PHÁ CÁC ĐIỂM ĐẾN</h1>

      <h2 className="mt-5">Điểm đến nội địa</h2>

      <Row>
        <Col>
          <DestinationCard image="/src/img/noidia.png"></DestinationCard>
        </Col>
      </Row>

      <h2 className="mt-5">Châu Âu</h2>
      <Row>
        <Col md={8}>
          <DestinationCard image="/src/img/anh.png"></DestinationCard>
        </Col>
        <Col md={4}>
          <DestinationCard image="/src/img/duc.png"></DestinationCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
