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
    <>
      <Container
        fluid
        className="justify-content-center align-items-center d-flex vh-100"
      >
        <Card className="p-5 shadow">
          <Card.Title className="text-center">
            <h1>Đăng nhập</h1>
          </Card.Title>
          <Card.Body>
            <Form>
              <InputGroup className="p-2">
                <InputGroup.Text>Đăng nhập</InputGroup.Text>
                <Form.Control placeholder="Nhập tài khoản..."></Form.Control>
              </InputGroup>
              <InputGroup className="p-2">
                <InputGroup.Text>Mật khẩu</InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu..."
                ></Form.Control>
              </InputGroup>
              <Button className="text-center w-100" type="submit">
                Đăng nhập
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Login;