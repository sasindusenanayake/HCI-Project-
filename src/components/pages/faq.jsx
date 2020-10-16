import React, { Component } from "react";
import { Accordion, Card, Form, Button, Col } from "react-bootstrap";
import "./faq.css";
import swal from 'sweetalert';



export default class faq extends Component {
  
  render() {
    function handleClick() {
      swal("Good job!", "You submitted a question successfully!", "success");
    }
    return (
      <div>
        <div className="faqContainer">
        
        <h1 className="faq-h1">Frequently Asked Questions (FAQ)</h1>

        <div className="accordionAlign">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle
                className="question"
                as={Card.Header}
                eventKey="0"
              >
                <h4 className="questionHeader">1. How do I track an order?</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="answer">
                  The more effectively you communicate available tracking
                  options, the fewer follow-ups you’ll get from anxious
                  customers. In MetaPack’sState of Ecommerce Delivery report,
                  nearly 90% of customers surveyed said they track the delivery
                  status of their orders. Adding tracking numbers to all
                  fulfilled orders can save you a lot of questions down the
                  line. You can also offer ePacket tracking to put the power in
                  the customers' hands.
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                className="question"
                as={Card.Header}
                eventKey="1"
              >
                <h4 className="questionHeader">2. What happens if my order arrives late?</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <div className="answer">
                  If you’re especially worried about late deliveries, you can
                  ship with a mail class that will refund you for late delivery,
                  like Priority Mail Express through USPS.
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle
                className="question"
                as={Card.Header}
                eventKey="2"
              >
                <h4 className="questionHeader">3. What do I do if a package arrives damaged?</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <div className="answer">
                  To give you better service when you call us about
                  damaged packages, please make sure to document damaged package
                  with the carrier before accepting delivery. All packages are
                  insured, but if damage occurs and it is not documented on
                  delivery, the carrier has the ability to deny the claim.
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <br/>
       
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
              <Form.Control required minlength="10" type="text" placeholder="Type here..." />
            </Form.Group>

            <Button onClick={handleClick} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
