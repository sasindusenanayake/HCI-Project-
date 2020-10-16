import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import Lr1 from "../images/Linear_AM-RRR.jpg";
import Lr2 from "../images/Linear_AM-RPR.jpg";
import Lr3 from "../images/Linear_AP-4.jpg";
import Lr4 from "../images/Linear_AP-5.jpg";

import "./receivers.css";

export default class linear extends Component {
  render() {
    return (
      <div>
        <Form.Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Lr1} />
              <Card.Body>
                <Card.Title>Linear AM-RRR Remote Radio Receiver</Card.Title>
                <Card.Text>
                  The Model AM-RRR Remote Radio Receiver is designed for use
                  with Linear's access control systems. The AM-RRR functions as
                  a remote device that extends the radio range or supplies
                  localized radio reception. Three antenna types can be used
                  with this receiver. -- $129.00 <br />
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
                                Provides extended range for radio-based access
                                control system
                                <br />
                                Up to 500 foot radius radio coverage
                                <br />
                                Radio LED detects transmission
                                <br />
                                Power supplied by access controller
                                <br />
                                Low voltage cable allows remote mounting without
                                signal loss
                                <br />
                                RF frequency: 318 MHz
                                <br />
                                4.25" W x 6.25" H x 2.5" D (without antenna)
                                <br />
                                Product Number: ACP00500
                                <br />
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
              <Card.Img variant="top" src={Lr2} />
              <Card.Body>
                <Card.Title>Linear AM-RPR Remote Proximity Receiver</Card.Title>
                <Card.Text>
                  The Model AM-RPR Remote Proximity Receiver is designed for use
                  with Linear's access control systems. The AM-RPR functions as
                  a remote device that supplies localized radio reception. --
                  $129.00 <br />
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
                                Convenient, cost-effective, and reliable form of
                                door or entrance control
                                <br />
                                2-to-3-inch radio transmitter read range
                                <br />
                                Compatible with Linear radio-based access
                                control systems
                                <br />
                                2-color status LED indicates "power on" and
                                "access granted"
                                <br />
                                Installs in a single-gang electrical box
                                <br />
                                Prevents transmitter from being detected by
                                wrong receiver
                                <br />
                                2.7" W x 4.5" H x 2" D<br />
                                Product Number: ACP00560
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
              <Card.Img variant="top" src={Lr3} />
              <Card.Body>
                <Card.Title>
                  Linear AP-5 Access Controller - Receiver
                </Card.Title>
                <Card.Text>
                  Dual-portal access control system, built-in radio receiver,
                  supports 480 block coded transmitters or 238 individual
                  transmitters/wireless keypad entry codes and six MGT obstacle
                  transmitters, three relays, programmable access or obstacle
                  output. -- $85.00
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
                                POWER
                                <br />
                                12 to 24 volts ac or dc, 250 mA maximum
                                <br />
                                OPERATING TEMPERATURE
                                <br />
                                -22° to +170°F (-30° to +77°C)
                                <br />
                                DIMENSIONS
                                <br />
                                3.625 in W x 5.25 in H x 1.5 in D (92 x 133 x 38
                                mm)
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
              <Card.Img variant="top" src={Lr4} />
              <Card.Body>
                <Card.Title>Linear AP-4 Gate Access Receiver</Card.Title>
                <Card.Text>
                  Ideal for gated communities, parking facilities, and
                  industrial sites. Easy to set-up and use — up to 480 remotes
                  can be programmed with a few keystrokes. Easy to add, suspend,
                  and delete transmitters through programming mode — no
                  transmitter dip switches to set. -- $85.00
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
                                Ideal for gated communities, parking facilities,
                                and industrial sites
                                <br />
                                Easy to set-up and use, up to 480 remotes can be
                                programmed with a few keystrokes
                                <br />
                                Three output relays; one for access, one for
                                obstacle, one programmable for access or
                                obstacle
                                <br />
                                High-gain superheterodyne receiver
                                <br />
                                RF frequency: 318 MHz
                                <br />
                                4.45" W x 5.75" H x 1.5" D (without antenna)
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
