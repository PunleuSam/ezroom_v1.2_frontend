import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Nav, Navbar, Form, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faPhoneSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const header = () => {
  return (
    <div>
      <div className="main-header">
        <Navbar className="Navbar" variant="dark">
          <Nav className="container-fluid">
            {/**logo and brand */}
            <Navbar.Brand>
              <a href="/home">
                <img
                  alt=""
                  src="/home.png"
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                />
              </a>
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
            <Nav.Link href="#about">
              <FontAwesomeIcon icon={faAddressBook} /> About
            </Nav.Link>

            {/**contact to our team */}
            <Nav.Link href="#contact">
              <FontAwesomeIcon icon={faPhoneSquare} /> Contact
            </Nav.Link>

            {/**login and sign up */}
            <Nav.Item className="ml-auto">
              <Nav.Link href="/login">
                <FontAwesomeIcon icon={faUser} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>

      <div className="main-search">
        
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Location</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group><Form.Group as={Col} controlId="formGridState">
              <Form.Label>Price</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

          </Form.Row>

          <Button as={Col} variant="light" type="submit">
            Search
          </Button>
        
      </div>
    </div>
  );
};

export default header;
