import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Login from "../pages/Login";

function Header() {
  return (
    <>
    <Navbar style={{ backgroundColor: "#f8f7f2" }} expand="lg" className="py-3">
      <Container className="d-flex justify-content-between">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fs-2 fw-bold text-dark">
          ASMALLWORLD
        </Navbar.Brand>

        {/* Nav Links */}
        <Nav className="me-auto d-flex gap-4">
          <Nav.Link as={Link} to="/" className="fs-5 text-dark">
            COLLECTION
          </Nav.Link>
          <Nav.Link as={Link} to="/events" className="fs-5 text-dark">
            EVENTS
          </Nav.Link>
          <Nav.Link as={Link} to="/membership" className="fs-5 text-dark">
            MEMBERSHIP
          </Nav.Link>
        </Nav>

        {/* Buttons */}
        <div className="d-flex gap-3">
        {/* Button mở modal */}
        <button className="btn btn-dark rounded-pill px-4 py-2 fs-5" data-bs-toggle="modal" data-bs-target="#loginModal">
          Login
        </button>
            <Login/>
        </div>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
