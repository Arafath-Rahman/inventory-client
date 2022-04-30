import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("../../../Assets/images/logo.png")}
              width="45"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PRAN DEALER INVENTORY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/features">
                <Nav.Link>Features</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pricing">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
