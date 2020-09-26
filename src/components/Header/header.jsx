import React, { Component } from 'react'
import '../footer/style.css'
import Logo from '../../asserts/logo.png'

export default class header extends Component {
    render() {
        return (
            <div>
              <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
          <div className="container-fluid">
            <a className="navbar-brand js-scroll-trigger" href="index.html">
              <h2 />
              <img src={require('../../asserts/logo.png')} width="100px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown  main-menu">
                  <a className="nav-link dropdown-toggle" href="#">Our Lawyers</a>
                  <div className="dropdown-menu main-menubox" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Our Lawyers – Douglas S. Ellmann, Esq.</a>
                    <a className="dropdown-item" href="#">Our Lawyers – Claudia Roberts Ellmann</a>
                  </div>
                </li>
                <li className="nav-item dropdown main-menu">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Our Legal Practice
                  </a>
                  <ul className="dropdown-menu main-menubox" aria-labelledby="navbarDropdownMenuLink">
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#">Bankruptcy/Debtor and Creditor Rights</a>
                      <ul className="dropdown-menu left77">
                        <a className="dropdown-item" href="#">Common Bankruptcy Terms</a>
                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="#">Employment Management – Employers</a></li>       
                    <li><a className="dropdown-item" href="#">Employment Management – Employers</a></li>
                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#">Initial Consultation</a>
                      <ul className="dropdown-menu left131">
                        <a className="dropdown-item" href="#">Initial Bankruptcy Consultation- Requested Documents</a>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Disclaimer</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
            </div>
        )
    }
}
