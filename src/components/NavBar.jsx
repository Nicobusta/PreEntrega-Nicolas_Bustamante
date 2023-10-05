import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './NavBar.scss';

const NavBar = () => {

  
  return (
    <>
      <Navbar expand="lg" className="nav__principal">
        <Container  fluid>
          <Navbar.Brand href="#home"><img src="logo.png" width="60" height="40" className="d-inline-block align-top" alt="logo" /></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Diseños" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Anime</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Futbol
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">San Valentin</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <CartWidget/>

        </Container>
      </Navbar>

    </>
  )

  
}

export default NavBar