import { useCart } from "./CartContext";
import { Card, Button, Container } from "react-bootstrap";

const Cart = () => {
  const { cart, removeFromCart, totalItems } = useCart();

  // Tính tổng tiền
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <Container>
      <h2>🛍️ Giỏ hàng ({totalItems} món)</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((product) => (
            <Card key={product.id} className="mb-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default Cart;
