import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const Menu = () => {
    return(
        <header className="header">
        <Navbar expand="lg" className="navbar">
        <Container className="logo" >
          <Navbar.Brand className="logo" href="/">Natalia Medina</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/contacto">Contáctanos</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <NavDropdown title="Trabajos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Trabajos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    );
}




export default Menu;