import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Nav, Form, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  faMapMarker,
  faRestroom,
  faDollarSign,
  faSearch,
  faAddressBook,
  faPhoneSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      {/**header */}
      <header>
        <Navbar bg="dark" variant="dark">
          <Nav className="container-fluid">
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
            <Nav.Link href="#about">
              <FontAwesomeIcon icon={faAddressBook} /> About
            </Nav.Link>

            {/**contact to our team */}
            <Nav.Link href="#contact">
              <FontAwesomeIcon icon={faPhoneSquare} /> Contact
            </Nav.Link>

            {/**login and sign up */}
            <Nav.Item className="ml-auto">
              <Nav.Link href="#signup">
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </header>
      {/**end header */}

      {/**body */}
      <body>
        <Form className="container">
          <Form.Row>
            {/**location condition */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Location <FontAwesomeIcon icon={faMapMarker} />
              </Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Chamkar Mon</option>
                <option>7 Makara</option>
                <option>Daun Penh</option>
                <option>Mean Chey</option>
                <option>Por Sen Chey</option>
                <option>Khan Toul Kork</option>
                <option>Dong Kao</option>
                <option>Russey keo</option>
                <option>Sen Sok</option>
              </Form.Control>
            </Form.Group>

            {/**type */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Type <FontAwesomeIcon icon={faRestroom} />
              </Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Room</option>
                <option>House</option>
                <option>Shop</option>
                <option>Apartment</option>
              </Form.Control>
            </Form.Group>

            {/**pricing */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Price <FontAwesomeIcon icon={faDollarSign} />
              </Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>$0 - $50</option>
                <option>$50 - $100</option>
                <option>$100 - $200</option>
                <option>$200 - $500</option>
                <option>Over $1000</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button as={Col} variant="dark" type="search">
            <FontAwesomeIcon icon={faSearch} /> Search
          </Button>

          {/** end form */}
        </Form>
      </body>
      {/*end body */}

      {/**footer */}
      <div>
        <footer className="bg-dark text-center text-white">
          {/**grid container */}
          <div className="container-fluid">
            {/**social media */}
            <div className="mb-4">
              <FontAwesomeIcon icon={ faUser }/>
              <FontAwesomeIcon icon={ faUser }/>
              <FontAwesomeIcon icon={ faUser }/>
              <FontAwesomeIcon icon={ faUser }/>
              <FontAwesomeIcon icon={ faUser }/>
              <FontAwesomeIcon icon={ faUser }/>
            </div>

            {/**form */}
            <div className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  

                  

                  <div className="col-auto">
                    {/**submit button */}
                    <button
                      type="submit"
                      className="btn btn-outline-light mb-4"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/**text section */}
            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </section>

            {/**section link */}
            <div>
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>link1</li>
                    <li>link2</li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>link1</li>
                    <li>link2</li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>link1</li>
                    <li>link2</li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>link1</li>
                    <li>link2</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/**copy right section */}
          <div
            className="text-center p-3"
            
          >
            © 2021 Copyright: Punleu-EZ company
          </div>
        </footer>
      </div>
      {/*end footer*/}
    </div>
  );
};

export default home;
