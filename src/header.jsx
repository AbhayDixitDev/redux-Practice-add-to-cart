import { Container, Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FaMoon, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((state) => state.cart.cartValue);

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
       
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/cart" className="position-relative">
            <FaShoppingCart className="me-2" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
            </span>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default Header;
