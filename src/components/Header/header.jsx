import React, { Component } from 'react'
import '../footer/style.css'
import Logo from '../../asserts/logo.png'

export default class header extends Component {
    render() {
        return (
            <div>
              <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav" style={{position:"relative"}} >
          <div className="container-fluid">
            <a className="navbar-brand js-scroll-trigger" href="index.html">
              <h2 />
              <img src={require('../../asserts/logo.png')} width="120px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/homegate">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown main-menu">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Gates
                  </a>
                  <ul className="dropdown-menu main-menubox" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/drivawaygates">Drivaaway Gates</a></li>
                    <li><a className="dropdown-item" href="/moderndrivawaygates">Modern Drivaaway Gates</a></li>       
                  </ul>
                </li>
                <li className="nav-item dropdown main-menu">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Railings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Operners</a>
                </li>
                <li className="nav-item dropdown main-menu">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Gates Equipments
                  </a>
                  <ul className="dropdown-menu main-menubox" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/Remotecontrols">Remote Controlls</a></li>
                    <li><a className="dropdown-item" href="#">Recievers</a></li>  
                    <li><a className="dropdown-item" href="#">Telephone</a></li>       
                  </ul>
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
