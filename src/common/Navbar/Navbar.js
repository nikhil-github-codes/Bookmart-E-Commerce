import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
import logo from '../../images/logo.jpg';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">
            <img src={logo} alt='Ascentia' className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>

              {/* Product dropdown */}
              <NavDropdown title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item href="/book/category1">Category 1</NavDropdown.Item>
                <NavDropdown.Item href="/book/category2">Category 2</NavDropdown.Item>
                {/* Add more items as needed */}
              </NavDropdown>

              {/* <Nav.Link href="/media">Media</Nav.Link> */}
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
