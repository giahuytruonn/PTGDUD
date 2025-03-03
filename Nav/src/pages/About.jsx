import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5 text-center" style={{ height: "740px" }}>
      <h1>Về Chúng Tôi</h1>
      <p className="lead">
        Chúng tôi mang đến những trải nghiệm du lịch tốt nhất với sự tận tâm và
        chuyên nghiệp.
      </p>
      <h2 className="mt-5">Câu chuyện của chúng tôi</h2>
      <p>
        Bắt đầu từ một ý tưởng nhỏ, chúng tôi đã phát triển thành một trong
        những công ty du lịch hàng đầu.
      </p>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h3>Chất lượng</h3>
            <p>Cam kết dịch vụ chất lượng cao.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h3>Uy tín</h3>
            <p>Hơn 10,000 khách hàng hài lòng.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm p-3">
            <h3>Sáng tạo</h3>
            <p>Liên tục đổi mới trải nghiệm du lịch.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
