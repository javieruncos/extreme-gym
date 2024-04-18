import React from 'react';
import "../../assets/style/Menu.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar expand="lg" className="Menu-Nav navbar-dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Formacion">Entrenamiento</Nav.Link>
                        <Nav.Link href="/Horarios">Clases</Nav.Link>
                        <Nav.Link href="/Planes">Planes</Nav.Link>
                        <Nav.Link href="/Contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;