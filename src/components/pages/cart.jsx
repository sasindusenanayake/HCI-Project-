import React, { Component } from 'react'
import './cart.css'
import Image from '../../asserts/gatesiamges/1.jpg'
import Image2 from '../../asserts/gatesiamges/2.jpg'
import Image3 from '../../asserts/gatesiamges/3.jpg'
import SweetAlert from 'react-bootstrap-sweetalert';

export default class cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  } 

  deleteThisGoal() {
    const getAlert = () => (
      <SweetAlert 
        success 
        title="Make Purchase!" 
        onConfirm={() => this.hideAlert()}
      >
        Thank you for choosing us
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  removeThisGoal() {
    const getAlert = () => (
      <SweetAlert 
        success 
        title="You want remove this item" 
        onConfirm={() => this.hideAlert1()}
      >
        Thank you 
      </SweetAlert>
    );

    this.setState({
      alert1: getAlert()
    });
  }

  hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
  }

  hideAlert1() {
    console.log('Hiding alert...');
    this.setState({
      alert1: null
    });
  }

    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 class="display-4" style={{color: "black"}}>Items In Your Shopping Cart</h1>
                    <p class="lead">Attention Hawaii, Puerto Rico, Virigin Islands, and Canada Customers. Please Call In your Order To Reduce Shipping Charges</p>
                  </div>
                </div>
                <div className="container-fluid-cart">
                
        <div className="row">
          <aside className="col-lg-8">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={100}>Quantity</th>
                      <th scope="col" width={100}>Price</th>
                      <th scope="col" className="text-right d-none d-md-block" width={100} />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src={Image} className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Spear of the Ocean  15ft Wide</a>
                            <p className="text-muted small">SKU: candycane3ft <br /> Brand: MAXTRA</p>
                          </figcaption>
                        </figure>
                      </td>
                      <td> <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select> </td>
                      <td>
                        <div className="price-wrap"> <var className="price">$10.00</var> <small className="text-muted"> $9.20 each </small> </div>
                      </td>
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light" data-abc="true" onClick={() => this.removeThisGoal()}> Remove</a>{this.state.alert1} </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src={Image2} className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Spear of the Ocean  10ft Wide</a>
                            <p className="text-muted small">SKU: candycane3ft <br /> Brand: ADDA </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td> <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select> </td>
                      <td>
                        <div className="price-wrap"> <var className="price">$15</var> <small className="text-muted"> $12 each </small> </div>
                      </td>
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light btn-round" data-abc="true" onClick={() => this.removeThisGoal()}> Remove</a>{this.state.alert1} </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src={Image3} className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Driveway Gate European Fan 10ft</a>
                            <p className="small text-muted">SKU: candycane3ft<br /> Brand: Cantabil</p>
                          </figcaption>
                        </figure>
                      </td>
                      <td> <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select> </td>
                      <td>
                        <div className="price-wrap"> <var className="price">$9</var> <small className="text-muted"> $6 each</small> </div>
                      </td>
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light btn-round" data-abc="true" onClick={() => this.removeThisGoal()}> Remove</a> {this.state.alert1}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group"> <label>Ordering Instructions</label>
                  <textarea class="form-control" aria-label="Enter Instruction here"></textarea>
                  <br></br>
                  <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-sm">Ship to Zip/Postal Code</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                  </div>
                  <br></br>
                  <div class="btn-group">
                      <button class="btn btn-primary btn-sm" type="button">
                        Payment Method
                      </button>
                      <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Visa</a>
                      <a class="dropdown-item" href="#">Master Card</a>
                      <a class="dropdown-item" href="#">PayPal</a>
                      </div>
                  </div>  
                  <br></br><br></br>
                  <div class="btn-group">
                      <button class="btn btn-primary btn-sm" type="button">
                        Ship to Country
                      </button>
                      <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">United States</a>
                      <a class="dropdown-item" href="#">Mexico</a>
                      <a class="dropdown-item" href="#">Saint Lucia</a>\
                      <a class="dropdown-item" href="#">Guam</a>
                      <a class="dropdown-item" href="#">Grenada</a>
                      </div>
                  </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right ml-3">$69.97</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-right text-danger ml-3">- $10.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right text-dark b ml-3"><strong>$59.97</strong></dd>
                </dl>
                <hr /> <a href="#" onClick={() => this.deleteThisGoal()} className="btn btn-out btn-primary btn-square btn-main" data-abc="true" > Make Purchase </a> {this.state.alert}<a href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
            </div>
        )
    }
}
