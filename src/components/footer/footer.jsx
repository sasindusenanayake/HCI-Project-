import React, { Component } from 'react'
import '../footer/style.css'

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h4>More Info</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" /></li>
                    <li><a href="contactus">Contact</a></li>
                    <li><a href="Manufactures">Manufactures</a></li>
                    <li><a href="#">Forms</a></li>
                    <li><a href="#">News and Updates</a></li>
                    <li><a href="/faq">FAQs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                 <a href="/aboutus"> <h4>About Us</h4></a>
                  <ul className="list-unstyled">
                    <li><a href="#">Website Tutorial</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="/ourPolicies">Our Policies</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="#">Webmaster</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {/*Column1*/}
                <div className="footer-pad">
                  <h4>Links</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Parks and Recreation</a></li>
                    <li><a href="#">Public Works</a></li>
                    <li><a href="#">Police Department</a></li>
                    <li><a href="#">Fire</a></li>
                    <li><a href="#">Mayor and City Council</a></li>
                    <li>
                      <a href="#" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                </ul>				
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">© Copyright 2020 - Gates&Fences.  All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
            </div>
        )
    }
}
