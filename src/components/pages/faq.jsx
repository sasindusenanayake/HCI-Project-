import React, { Component } from "react";
import { Accordion, Card, Form, Button, Col } from "react-bootstrap";
import "./faq.css";
import swal from "sweetalert";

export default class faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //fname
    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "Cannot be empty";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["fname"] = "Only letters";
      }
    }

    //ques
    if (!fields["ques"]) {
      formIsValid = false;
      errors["ques"] = "Cannot be empty";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      swal("Good job!", "You submitted a question successfully!", "success");
      //alert("Good!");
    } else {
      swal("Error!", "Something went wrong!", "error");
      //alert("Error!");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
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
                  <h4 className="questionHeader">
                    1. How do I track an order?
                  </h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="answer">
                      The more effectively you communicate available tracking
                      options, the fewer follow-ups you’ll get from anxious
                      customers. In MetaPack’sState of Ecommerce Delivery
                      report, nearly 90% of customers surveyed said they track
                      the delivery status of their orders. Adding tracking
                      numbers to all fulfilled orders can save you a lot of
                      questions down the line. You can also offer ePacket
                      tracking to put the power in the customers' hands.
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
                  <h4 className="questionHeader">
                    2. What happens if my order arrives late?
                  </h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className="answer">
                      If you’re especially worried about late deliveries, you
                      can ship with a mail class that will refund you for late
                      delivery, like Priority Mail Express through USPS.
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
                  <h4 className="questionHeader">
                    3. What do I do if a package arrives damaged?
                  </h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className="answer">
                      To give you better service when you call us about damaged
                      packages, please make sure to document damaged package
                      with the carrier before accepting delivery. All packages
                      are insured, but if damage occurs and it is not documented
                      on delivery, the carrier has the ability to deny the
                      claim.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <br />
        </div>

        <div className="accordionAlign">
          <Form onSubmit={this.contactSubmit.bind(this)}>
            <Form.Row>
              <Form.Group as={Col} controlId="fName">
                <Form.Label className="fName">First Name</Form.Label>
                
                <Form.Control
                  type="text"
                  ref="fname"
                  placeholder="Enter Name"
                  onChange={this.handleChange.bind(this, "fname")}
                  value={this.state.fields["fname"]}
                />
                <Form.Text className="text-muted">
                {this.state.errors["fname"]}
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label className="email">Email address</Form.Label>
                
                <Form.Control
                  type="email"
                  ref="email"
                  placeholder="Enter email"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
                />
                <Form.Text className="text-muted">
                {this.state.errors["email"]}
                </Form.Text>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="question">
              <Form.Label className="questionLabel">Question</Form.Label>
              
              <Form.Control
                minlength="10"
                type="text"
                placeholder="Type here..."
                ref="ques"
                  onChange={this.handleChange.bind(this, "ques")}
                  value={this.state.fields["ques"]}
              />
              <Form.Text className="text-muted">
              {this.state.errors["ques"]}
                </Form.Text>
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
