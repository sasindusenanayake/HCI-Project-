import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import Dk1 from "../images/Doorking_8054-081.png";
import Dk2 from "../images/Doorking_8057-081.png";

import "./receivers.css";

export default class doorking extends Component {
  render() {
    return (
      <div>
        <Form.Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Dk1} />
            <Card.Body>
              <Card.Title>Doorking 8054-081 Micro-Plus Receivers</Card.Title>
              <Card.Text>
                Stand-alone receiver. Stores up to 1250 transmitter codes 2300
                event transaction buffer. Output for serial printer. 10
                programmable time zones. Built-in clock / calendar. Programming
                keypad. Form C relay. 12-24 volt, AC or DC.
              </Card.Text>
              <Button disabled variant="primary" size="sm">
                CALL FOR PRICE
              </Button>
            </Card.Body>
          </Card>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Dk2} />
              <Card.Body>
                <Card.Title>Doorking 8057-081 Micro-Plus Receivers</Card.Title>
                <Card.Text>
                  Designed for multi-user stand-alone applications. Can store up
                  to 16000 transmitter codes. Uses 8066-080, 8067-080 and
                  8068-080 transmitters, includes batteries, 318MHz Single Pole
                  relay. Built-in programming keypad for adding and deleting
                  individual codes.
                </Card.Text>

                <Button disabled variant="primary" size="sm">
                  CALL FOR PRICE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Form.Row>
      </div>
    );
  }
}
