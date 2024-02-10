import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavDropdown } from 'react-bootstrap';
import "../styles/TopNav.css";
import iTechLogo from "../assets/images/iTechLogo.svg";

const TopNav = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={iTechLogo} width="110" height="32" className="d-inline-block align-top" alt="ITech logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="flex-column flex-lg-row">
                    <Nav className="me-auto mb-2 mb-lg-0">
                        <NavDropdown title="Our Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#project1">Project 1</NavDropdown.Item>
                            <NavDropdown.Item href="#project2">Project 2</NavDropdown.Item>
                            <NavDropdown.Item href="#project3">Project 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#inspection">Schedule an Inspection</Nav.Link>
                        <Nav.Link href="#our-contact">Our Contact</Nav.Link>
                    </Nav>
                    <div className="d-lg-none mb-2" style={{display: "grid", placeItems: "center"}}>
                        <Button className="sign-up-button btn btn-primary w-30" style={{marginRight: "20px"}}>Sign up as agent</Button>
                        <Button className="login-button btn btn-outline-primary w-30 mt-2">Login</Button>
                    </div>
                    <div className="d-none d-lg-flex flex-column flex-lg-row justify-content-between">
                        <Button className="sign-up-button btn btn-primary mb-2">Sign up as agent</Button>
                        <span className="buttons-space"></span>
                        <Button className="login-button btn btn-outline-primary">Login</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;
