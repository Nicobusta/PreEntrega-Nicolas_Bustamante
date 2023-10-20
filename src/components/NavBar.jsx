import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';


const NavBar = () => {

  
  return (
    <>
      <Navbar expand="lg" className="nav__principal">
        <Container  fluid>
          <Link to={"/"}>
            <Navbar.Brand ><img src="/logo.png" width="60" height="40" className="d-inline-block align-top" alt="logo" /></Navbar.Brand>
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items-center mx-auto fs-5">
              <div >
                <Link to={"/"}>
                  Inicio
                </Link>
              </div>
              <NavDropdown title="Diseños" id="basic-nav-dropdown">
                <Link to={"/diseno"}>Todos</Link>
                <Link to={"/categoria/Anime"}>Anime</Link>  
                <Link to={"/categoria/Futbol"}>Futbol</Link>
                <Link to={"/categoria/San Valentin"}>San Valentin</Link>
              </NavDropdown>
              <div><Link to={"/contacto"}>Contacto</Link></div>
            </Nav>
          </Navbar.Collapse>

          <CartWidget/>

        </Container>
      </Navbar>

    </>
  )

  
}

export default NavBar