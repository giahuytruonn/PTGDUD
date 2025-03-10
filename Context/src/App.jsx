import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <Navbar
        style={{ backgroundColor: "#ee4d2d" }}
        variant="dark"
        className="mb-3"
      >
        <Container>
          <Navbar.Brand href="#">
            <h1> 🛒 Shopee</h1>
          </Navbar.Brand>
          <Nav></Nav>
        </Container>
      </Navbar>
      <Container>
        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "70%" }}>
            <ProductList />
          </div>
          <div style={{ width: "30%" }}>
            <Cart />
          </div>
        </div>
      </Container>
    </CartProvider>
  );
}

export default App;
