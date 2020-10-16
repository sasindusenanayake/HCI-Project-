import React, { Component } from "react";
import {
  Card,
  Button,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Form,
  Row,
  Tab,
  Nav,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import MultiCode from "./multiCode.jsx";
import Liftmaster from "./liftmaster.jsx";
import Doorking from "./doorking.jsx";
import Linear from "./linear.jsx";



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
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
<br/>
<br/>
<br/>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Form.Row className="tabMargin">
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Multi-Code</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Liftmaster</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Doorking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Linear</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <MultiCode />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Liftmaster />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Doorking />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Linear />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Form.Row>
        </Tab.Container>
      </div>
    );
  }
}
