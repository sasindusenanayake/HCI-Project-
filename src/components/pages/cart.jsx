import React, { Component } from 'react'
import './cart.css'

export default class cart extends Component {
    render() {
        return (
            <div>
                
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
                          <div className="aside"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574342017/rTVSl.jpg" className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Tshirt with round nect</a>
                            <p className="text-muted small">SIZE: L <br /> Brand: MAXTRA</p>
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
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574342054/imgrc0078783629.jpg" className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Flower Formal T-shirt</a>
                            <p className="text-muted small">SIZE: L <br /> Brand: ADDA </p>
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
                      <td className="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title href className="btn btn-light" data-toggle="tooltip" data-abc="true"> <i className="fa fa-heart" /></a> <a href className="btn btn-light btn-round" data-abc="true"> Remove</a> </td>
                    </tr>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574342208/ra_unisex_tshirt_x2200_fafafa_ca443f4786_front-c_267_146_1000_1000-bg_f8f8f8.u1.jpg" className="img-sm" /></div>
                          <figcaption className="info"> <a href="#" className="title text-dark" data-abc="true">Printed White Tshirt</a>
                            <p className="small text-muted">SIZE:M <br /> Brand: Cantabil</p>
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
                  <div className="form-group"> <label>Have coupon?</label>
                    <div className="input-group"> <input type="text" className="form-control coupon" name placeholder="Coupon code" /> <span className="input-group-append"> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
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
                <hr /> <a href="#" className="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a> <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
            </div>
        )
    }
}
