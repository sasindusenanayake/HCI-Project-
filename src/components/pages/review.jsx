import React, { Component } from 'react'
import './cart.css'
import Image from '../../asserts/gatesiamges/1.jpg'
import Image2 from '../../asserts/gatesiamges/2.jpg'
import Image3 from '../../asserts/gatesiamges/3.jpg'

export default class review extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 class="display-4">Items In Your Shopping Cart</h1>
                    <p class="lead">Attention Hawaii, Puerto Rico, Virigin Islands, and Canada Customers. Please Call In your Order To Reduce Shipping Charges</p>
                  </div>
                </div>
                <div className="container-fluid-cart">
                
        <div className="row">
          <aside className="col-lg-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>Quantity</th>
                      <th scope="col" width={120}>Price</th>
                      <th scope="col" className="text-right d-none d-md-block" width={200} />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src={Image} className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Pacific Tide</a>
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
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light" data-abc="true"> Remove</a> </td>
                    </tr>
                    <tr>
                      <td>
                       
                        <div className="price-wrap"> <var className="price">$15</var> <small className="text-muted"> $12 each </small> </div>
                      </td>
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light btn-round" data-abc="true"> Remove</a> </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src={Image3} className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Printed White Tshirt</a>
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
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light btn-round" data-abc="true"> Remove</a> </td>
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
                  
                  <br></br><br></br>
                  <div class="btn-group">
                                    
                      <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
                      
                  </div>
                  </div></div>
                </form>
              </div>
            </div>
            
          </aside>
        </div>
      </div>
            </div>
        )
    }
}
