import { BrowserRouter as Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  Image,
  InputGroup,
  Form,
} from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <NavbarBrand>
          <div className="d-flex justify-content-center align-items-center">
            <Image src="/src/img/logo.png" style={{ width: "48px" }} />
            <span
              className="mx-3"
              style={{ color: "#f44b87", fontSize: "30px", fontWeight: "bold" }}
            >
              Chefify
            </span>
          </div>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup style={{ width: "350px" }}>
            <InputGroup.Text>
              <Image src="/src/img/kinhLup.png" style={{ width: "35px" }} />
            </InputGroup.Text>
            <Form.Control placeholder="What would you like to cook?"></Form.Control>
          </InputGroup>
          <Nav className="me-auto">
            <NavLink as={Link} to="/">
              What to cook
            </NavLink>
            <NavLink as={Link} to="recipes">
              Recipes
            </NavLink>
            <NavLink as={Link} to="">
              Ingredients
            </NavLink>
            <NavLink as={Link} to="">
              Occasions
            </NavLink>
            <NavLink as={Link} to="">
              About Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
