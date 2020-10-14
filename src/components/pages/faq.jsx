import React, { Component } from "react";
import { Accordion, Card, Form, Button, Col } from "react-bootstrap";
import "./faq.css";

export default class faq extends Component {
  render() {
    return (
      <div>
        <h1 className="faq-h1">Frequently Asked Questions (FAQ)</h1>

        <div className="accordionAlign">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle
                className="question"
                as={Card.Header}
                eventKey="0"
              >
                The First Question?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the first answer.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                className="question"
                as={Card.Header}
                eventKey="1"
              >
                The Second Question?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm the second answer.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                className="question"
                as={Card.Header}
                eventKey="2"
              >
                The Third Question?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm the third answer</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div className="accordionAlign">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="fName">
                <Form.Label className="fName">First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label className="email">Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="question">
              <Form.Label className="questionLabel">Question</Form.Label>
              <Form.Control required type="text" placeholder="Type here..." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
