import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../img/Logo.jpeg';

function NavBar() {
    return (
    <Navbar bg="white" variant="white" expand="lg">
        <Navbar.Brand href="#inicio">
        <img src={Logo} alt="Logo" width="250" height="125" border="white" style={{ marginLeft: '100px' }} /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end" style={{ marginRight: '150px' }} >
        <Nav>
            <Nav.Link href="#inicio" className="text-dark" style={{ fontSize: '18px', marginRight: '20px' }}>INICIO</Nav.Link>
            <NavDropdown title="TIENDA" id="nav-dropdown" className="text-dark" style={{ fontSize: '18px', marginRight: '20px' }}>
            <NavDropdown.Item href="#remeras">Remeras & Tops</NavDropdown.Item>
            <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>
            <NavDropdown.Item href="#polleras">Polleras</NavDropdown.Item>
            <NavDropdown.Item href="#shorts">Shorts & Bikers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#nosotras" className="text-dark" style={{ fontSize: '18px', marginRight: '20px' }}>NOSOTRAS</Nav.Link>
            <Nav.Link href="#contacto" className="text-dark" style={{ fontSize: '18px', marginRight: '20px' }}>CONTACTO</Nav.Link>
            <Nav.Link href="#faq" className="text-dark" style={{ fontSize: '18px', marginRight: '20px' }}>FAQ</Nav.Link>
        </Nav>
        <Nav>
            <CartWidget />
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;
