import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        fixed="top"
        className=""
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='fw-bold' href="#home">
              <img
                alt=""
                src={require("../../../Assets/images/logo.png")}
                width="45"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <span style={{color:'tomato'}} >PRAN DEALER INVENTORY</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pricing">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>
              {
                user ? <button onClick={()=> signOut(auth)} className="btn ms-5 text-white" style={{backgroundColor: 'tomato'}}>Logout</button> : <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
              } 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
