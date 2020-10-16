import React, { Component } from "react";
import { Tabs, Tab, Carousel } from "react-bootstrap";
import "./ourPolicies.css";
import EmailIcon from "@material-ui/icons/Email";

import ship from "../images/boat-cargo-ocean.jpg";
import returnBox from "../images/returnRefund-box.jpg";
import vectorPayment from "../images/vector-concept-of-payment.jpg";



export default class ourPolicies extends Component {
  render() {
    return (
      <div>
        {/* <div style={{backgroundImage: `url(${backgroundImg})`}}> */}
        <h1 className="ourP-h1">Our Policies</h1>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ship}
              height="500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="labelShadow">Yes, We Ship Internationally!</h3>
              <p className="labelShadow">We partner with premium carriers around the world to offer the most competitive rates</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={returnBox}
              height="500"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="labelShadow">Accepting Returns</h3>
              <p className="labelShadow">Attract and retain buyers with a great returns policy</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={vectorPayment}
              height="500"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="labelShadow">Payment Method Rights and Remedies</h3>
              <p className="labelShadow">No contract, no commitment. Just amazing deals!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" id="tabs">
            <Tabs id="uncontrolled-tab-example">
              <Tab eventKey="privacyStatement" title="Privacy Statement">
                In the process of placing an order we collect the customer
                e-mail address and home address. This is strictlly used for
                billing, shipping, and newsletter purposes. We do not sell,
                distribute, or share that information with anyone. Your
                information is held in a secure file in our main office.
              </Tab>
              <Tab eventKey="shippingInfo" title="Shipping Information">
                We will ship via Freight Carrier (Insured) IN THE LOWER 48. Some
                Item Do Have Handling Charges, this charges will appear
                automatically at check out.In most cases this charges are for
                making special wood CRATE to protect from damages that can
                occuerd in transportation. For other shipping locations please
                contact us for shipping charges.
                <br />
                <br />
                Transportation Company: The Company that we use for shipping is
                OVERNITE TRANSPORTATION COMPANY for there polocy visit
                WWW.OVERNITE.COM
              </Tab>
              <Tab eventKey="damageInShipping" title="Damage in Shipping">
                In the event that your item arrives damaged in shipping, please
                you must follow this instructions: Upon Delivery Before The
                Delivery Person Leaves Your Premises: You Must Inspect The
                Freight For Any Signs Of Damage Done To The Outer Packaging Of
                The Shipment. IF A Problem Is Discover You Must Bring It To The
                Driver's Attention Immediately, Then Take The Following Steps:
                Open The Container Immediately To Check The Contents. ASK THE
                DRIVERS TO INSPECT THE CONTENTS WITH YOU., Write A Precise
                Description Of The Damage On Both Your Copy And Overnite's Copy
                Of The Delivery Receipt. ANY DAMAGE THAT IS CONCEALED: As Soon
                As Possible After The Delivery, Inspect The Shipment. If
                Concealed Damage Is Discovered, Report It To Overnite
                Immediately, And It Will Be Determined If An Inspection Is
                Necessary.
              </Tab>
              <Tab eventKey="returnRefund" title="Return and Refund Policy">
                We do not accept returns except for merchandise that is damage
                on shipment. We will place a claim with the carrier, and your
                order will be replaced as soon as possible.
                <br />
                You are responsible for all freight charges for shipments that
                are or returned undelivered with no fault in our part.
              </Tab>
              <Tab eventKey="itemPrices" title="Item Prices and Availability">
                GATES AND FENCES: All Gates and Fence are made to order, once
                the order is received we will manufacture the product, painted
                and crated this takes a time period of approximately two weeks.
                <br />
                <br />
                GATE OPERATORS: We will ship within 24 hours. Monday thru
                Friday.
                <br />
                <br />
                FURNITURE: Most of the time we will ship within 24 hours. Monday
                thru Friday, In Some Cases We Might Be Out Of Stock Then We Will
                Advice On Availability.
              </Tab>
              <Tab
                eventKey="paymentMethod"
                title="Payment Method and Guarantee"
              >
                Visa / Master Card and American Express (thru Secured Pay-Pal)
                in the U.S.A. only. (Outside the U.S.A. Bank Direct Transfer
                thru Pay-Pal Only.) Checks and Money Orders are accepted. A 7%
                Sales tax will be added to all order in Florida.
                <br />
                <br />
                All Materials Used To Manufacture Our Products Are First Class
                Materials, All Gates And Fences Craftmenship Are Done By Our
                Experience Team Of Welders And All Our Merchandise Are Painted
                Electrostatic Oven Baked For Years Of Enjoyment And Peace Of
                Mind.
              </Tab>
            </Tabs>
          </div>
          <div className="col-1"></div>
        </div>
        <div id="mySidenav" className="sidenav">
          <a
            href="mailto:gatesnfences@gnf.mail.com?subject=SupportTeam- GatesnFences&body=The message"
            id="mail"
          >
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </div>
      // </div>
    );
  }
}
