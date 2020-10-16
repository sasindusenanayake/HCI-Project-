import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import MC1011 from "../images/Multi_Code_1011.jpg";
import MC2022 from "../images/Multi_Code_2022.jpg";
import MC302210 from "../images/Multi_Code_302210.jpg";
import MC309013 from "../images/Multi_Code_309013.jpg";

import "./receivers.css";

export default class multiCode extends Component {
  render() {
    return (
      <div>
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
                                Compatible with all 300 MHz Multi-Code radio
                                controls
                                <br />
                                Transmitter supplied with visor clip
                                <br />
                                Transmitter powered by 9-volt battery
                                <br />
                                Three terminal 24-volt receiver connects
                                directly to operator
                                <br />
                                1,024 codes
                                <br />
                                RF frequency: 300 MHz
                                <br />
                                3" W x 5.5" H x 1.5" D (receiver)
                                <br />
                                2.5" W x 3.75" H x 0.875" D (transmitter)
                                <br />
                                Order number: MCS1011
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
              <Card.Img variant="top" src={MC2022} />
              <Card.Body>
                <Card.Title>MultiCode 2022 Receiver Kit</Card.Title>
                <Card.Text>
                  MultiCode 2022 Two Remotes 308911 and One Receiver 109020 Set
                  -- $84.00
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
                                Compatible with all Multi-Code radio controls
                                <br />
                                Transmitters supplied with visor clip
                                <br />
                                Transmitters powered by 9-volt battery
                                <br /> Three terminal 24-volt receiver connects
                                directly to operator 1,024 codes <br />
                                RF frequency: 300 MHz <br />
                                3" W x 5.5" H x 1.5" D (receiver) <br />
                                2.5" W x 3.75" H x 0.875" D (transmitters){" "}
                                <br />
                                Order number: MCS2022
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
              <Card.Img variant="top" src={MC302210} />
              <Card.Body>
                <Card.Title>Multi-Code 302210 Gate Safety Edge</Card.Title>
                <Card.Text>
                  Multi-Code 302210: Safety Edge Transmitter - 300 MHz --
                  $106.00 <br />
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
                                Compatible with 300 MHz Multi-Code receivers
                                <br />
                                Safety edge transmitter
                                <br />
                                Activates receiver for stop or reverse
                                entrapment
                                <br />
                                No cables or coiled wires
                                <br />
                                Mounting hardware (4 screws) supplied
                                <br />
                                Powered by 9-volt battery
                                <br />
                                1,024 codes
                                <br />
                                Frequency: 300 MHz
                                <br />
                                4" W x 4.28" H x 2.2" D<br />
                                Order number: MCS302210
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
              <Card.Img variant="top" src={MC309013} />
              <Card.Body>
                <Card.Title>MultiCode 309013 Receiver</Card.Title>
                <Card.Text>
                  Multi-Code 309013 1-channel Receiver 310MHz -- $48.00 <br />
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
                                Operates on 24 VAC power
                                <br />
                                One channel
                                <br />
                                1,024 codes
                                <br />
                                RF frequency: 310 MHz
                                <br />
                                3" W x 5.5" H x 1.5" D<br />
                                Order number: MCS309013
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
