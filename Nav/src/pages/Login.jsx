import { InputGroup, Form, Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with Username: ${username}`);
  };

  return (
    <Container
      fluid
      className="justify-content-center align-items-center d-flex"
      style={{ height: "785px" }}
    >
      <Card className="p-5 shadow">
        <Card.Title className="text-center">
          <h1>Đăng nhập</h1>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="p-2">
              <InputGroup.Text>Tài khoản</InputGroup.Text>
              <Form.Control
                placeholder="Nhập tài khoản..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="p-2">
              <InputGroup.Text>Mật khẩu</InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
            <Button
              className="text-center w-100 mt-3"
              style={{ backgroundColor: "#387c24", borderColor: "#387c24" }}
              type="submit"
            >
              Đăng nhập
            </Button>
            <span style={{ color: "blue" }}>
              <a style={{ fontSize: "14px" }} href="#">
                Quên mật khẩu?
              </a>
            </span>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
