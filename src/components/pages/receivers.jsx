import React, { Component } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

import MC1011 from "../images/Multi_Code_1011.jpg";
import MC2022 from "../images/Multi_Code_2022.jpg";
import MC302210 from "../images/Multi_Code_302210.jpg";
import MC309013 from "../images/Multi_Code_309013.jpg";

import "./receivers.css";

export default class receivers extends Component {
  render() {
    return (
      <div>
        <h1 className="receivers-h1">Receivers</h1>

        <div className="filterTab">
          {/* Choose Category: Dropdown
          Choose Brand:  Dropdown
          Search Product: Search bar */}
          {/* Row component creates a margin */}
          <Form.Row>
            <Col>
              <DropdownButton id="dropdown-basic-button" title="Choose Brand">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
            <div className="col-3">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Button variant="outline-secondary"> Search Product</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" />
              </InputGroup>
            </div>
          </Form.Row>
        </div>

        <Form.Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={MC1011} />
              <Card.Body>
                <Card.Title>MultiCode 1011 Receiver Kit</Card.Title>
                <Card.Text>
                  MultiCode 1011 One Remote 308911 and One Receiver 109020 Set
                  -- $69.00
                </Card.Text>
                <Form.Row>
                  <Col>
                    <Button variant="primary" size="sm">
                      View More
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" size="sm">
                      Add to Cart
                    </Button>
                  </Col>
                </Form.Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={MC2022} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Form.Row>
                  <Col>
                    <Button variant="primary" size="sm">
                      View More
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" size="sm">
                      Add to Cart
                    </Button>
                  </Col>
                </Form.Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={MC302210} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Form.Row>
                  <Col>
                    <Button variant="primary" size="sm">
                      View More
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" size="sm">
                      Add to Cart
                    </Button>
                  </Col>
                </Form.Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={MC309013} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Form.Row>
                  <Col>
                    <Button variant="primary" size="sm">
                      View More
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" size="sm">
                      Add to Cart
                    </Button>
                  </Col>
                </Form.Row>
              </Card.Body>
            </Card>
          </Col>
        </Form.Row>
      </div>
    );
  }
}
