import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <Navbar bg="success" variant="dark">

        {/**logo and brand */}
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/home.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          eZRoom
        </Navbar.Brand>

        {/**for location dropdown */}
        <NavDropdown title="Location">
          <NavDropdown.Item>Chamkar Mon</NavDropdown.Item>
          <NavDropdown.Item>7 Makara</NavDropdown.Item>
          <NavDropdown.Item>Daun Penh</NavDropdown.Item>
          <NavDropdown.Item>Mean Chey</NavDropdown.Item>
          <NavDropdown.Item>Por Sen Chey</NavDropdown.Item>
          <NavDropdown.Item>Khan Toul Kork</NavDropdown.Item>
          <NavDropdown.Item>Dong Kao</NavDropdown.Item>
          <NavDropdown.Item>Russey keo</NavDropdown.Item>
          <NavDropdown.Item>Sen Sok</NavDropdown.Item>
        </NavDropdown>

        {/**for type of room dropdown */}
        <NavDropdown title="Type">
          <NavDropdown.Item>Room</NavDropdown.Item>
          <NavDropdown.Item>House</NavDropdown.Item>
          <NavDropdown.Item>Shop</NavDropdown.Item>
          <NavDropdown.Item>Apartment</NavDropdown.Item>
        </NavDropdown>

        {/**for price range dropdown */}
        <NavDropdown title="Price">
          <NavDropdown.Item>$0 - $50</NavDropdown.Item>
          <NavDropdown.Item>$50 - $100</NavDropdown.Item>
          <NavDropdown.Item>$100 - $200</NavDropdown.Item>
          <NavDropdown.Item>$200 - $500</NavDropdown.Item>
          <NavDropdown.Item>Over $1000</NavDropdown.Item>
        </NavDropdown>

        {/**about this website.... */}
        <Nav.Link href="#about">About</Nav.Link>

        {/**contact to our team */}
        <Nav.Link href="#contact">
          Contact<FontAwesomeIcon icon="phone"></FontAwesomeIcon>
        </Nav.Link>

        {/**login and sign up */}
        <Nav.Link href="#log">
          Login
          <FontAwesomeIcon icon="user"></FontAwesomeIcon>
        </Nav.Link>
      </Navbar>
    </header>

    
  );
};

export default Header;
