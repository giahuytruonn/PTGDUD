import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5" style={{ height: "740px" }}>
      <h1 className="text-center">Liên hệ với chúng tôi</h1>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Thông tin liên hệ</h3>
          <p>📍 Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</p>
          <p>📞 Hotline: 0123 456 789</p>
          <p>📧 Email: support@travel.com</p>
        </Col>

        <Col md={6}>
          <h3>Gửi tin nhắn cho chúng tôi</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ tên của bạn" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập email của bạn" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Nhập tin nhắn của bạn"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Gửi tin nhắn
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
