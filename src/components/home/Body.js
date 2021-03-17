import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMapMarker,
  faRestroom,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Body.css";

import { Form, Button, Col } from "react-bootstrap";

const Body = () => {
  return (
    <body className="fluid">
      {/**search engine */}
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
  );
};

export default Body;
