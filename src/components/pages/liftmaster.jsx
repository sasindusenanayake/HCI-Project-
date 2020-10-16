import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import Lm1 from "../images/Liftmaster_312HM.jpg";
import Lm2 from "../images/LiftMaster_423LM.jpg";
import Lm3 from "../images/Liftmaster_Chamberlain.jpg";
import Lm4 from "../images/Liftmaster_CPWR.jpg";

import "./receivers.css";

export default class liftmaster extends Component {
  render() {
    return (
      <div>
        <Form.Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Lm1} />
              <Card.Body>
                <Card.Title>Liftmaster 315mhz Frequency Receiver </Card.Title>
                <Card.Text>
                  The Liftmaster® 312HM receiver operates at 315mhz and is used
                  to access automatic doors, garage doors, and gates. The 312HM
                  model is compatible with LiftMaster® 300 series products.
                </Card.Text>
                <Form.Row>
                  <Col>
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Title as="h3">Features</Popover.Title>
                              <Popover.Content>
                                Over 100 billion possible codes in High Security
                                mode, this receiver will work on 12 volt DC or
                                18 - 35 volts AC/DC, jumper selectable.
                                <br />
                                Can be used with up to 18 Security+ (code
                                rotating) transmitters or 31 of ANY type
                                transmitter including billion code, code
                                rotating or code switch remote
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <Button variant="primary" size="sm">
                            View More
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
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
              <Card.Img variant="top" src={Lm2} />
              <Card.Body>
                <Card.Title>LiftMaster 423LM Three Channel Receiver</Card.Title>
                <Card.Text>
                  LiftMaster 423LM Three Channel High Memory Coaxial Receiver
                  can be used with a multi-function remote control to operate
                  three residential garage door openers. <br /> <br />
                </Card.Text>
                <Form.Row>
                  <Col>
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Title as="h3">Features</Popover.Title>
                              <Popover.Content>
                                -18-35V AC/DC or 12V DC selectable power supply
                                options
                                <br />
                                -Security+ with rotating code technology -
                                390MHz
                                <br />
                                -Use with up to 31 of any type transmitter in
                                NORMAL security mode
                                <br />
                                -Easy programming using Smart Garage Door Opener
                                electronics
                                <br />
                                -Open/close/stop functions for commercial
                                operator applications
                                <br />
                                -Sears Craftsman Lift-Master Chamberlain
                                compatible
                                <br />
                                -Receiver, antenna wire, bell wire and
                                instructions included
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <Button variant="primary" size="sm">
                            View More
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
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
              <Card.Img variant="top" src={Lm3} />
              <Card.Body>
                <Card.Title>Liftmaster Chamberlain TCR-2 Receiver</Card.Title>
                <Card.Text>
                  This is compatible with Multi Code 1090, Stanley and Linear
                  Delta-3 and DR systems. Operates 300mhz and 310mhz dip switch
                  style garage door openers.
                  <br />
                  <br />
                </Card.Text>
                <Form.Row>
                  <Col>
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Title as="h3">Features</Popover.Title>
                              <Popover.Content>
                                Two-channel universal receiver:
                                <br />
                                There are 2 - 3-position slide dip switch bars
                                <br />
                                NEMA 1 rating
                                <br />
                                6 wire leads (9")
                                <br />2 NO relay related at 24V AC/DC at 10A.
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <Button variant="primary" size="sm">
                            View More
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
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
              <Card.Img variant="top" src={Lm4} />
              <Card.Body>
                <Card.Title>Liftmaster CPWR3 Passport Receiver</Card.Title>
                <Card.Text>
                  Works with 1, 2, 3 and 4-button remotes. Works with 1,
                  2-button mini key-chain remotes. Uses the Wiegand format with
                  telephone entry and acs.
                </Card.Text>
                <Form.Row>
                  <Col>
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Title as="h3">Features</Popover.Title>
                              <Popover.Content>
                                Uses the Wiegand format which easily integrates
                                with telephone entry and access control systems
                                using 26 and 30-bit formats
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <Button variant="primary" size="sm">
                            View More
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
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
