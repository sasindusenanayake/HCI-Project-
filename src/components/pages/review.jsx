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
                    <h1 class="display-4">Reviews</h1>
                   
                  </div>
                </div>
                <div className="container-fluid-cart">
                
        <div className="row">
          <aside className="col-lg-9">
            <div className="card">
              <div className="table-responsive">
              <div class="our_clients_review">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <h1 class="h1 text-center">Reviews</h1>
                <div id="client-slider" class="owl-carousel">
                    <div class="client_testimonial">
                        <div class="pic">
                            <img src={Image}/>
                        </div>
                        <div class="client_info">
                            <h2 class="title">WILLIAMSON</h2>
                            <small class="post">CLient</small>
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                        </div>
                    </div>
                    <div class="client_testimonial">
                        <div class="pic">
                            <img src={Image}/>
                        </div>
                        <div class="client_info">
                            <h2 class="title">Jenny</h2>
                            <small class="post">Client</small>
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vulputate nisi in fermentum. Vivamus ac libero quis nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis massa eget, ullamcorper diam. Nunc sit amet felis eget arcu congue dictum.</p>
                        </div>
                    </div>
                   
            </div>
        </div>
    </div>
</div>
</div>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group"> <label>Name</label>
                  <textarea class="form-control" aria-label="Enter Instruction here"></textarea>
                  <div className="form-group"> <label>Enter Your Review</label>
                  <textarea class="form-control" aria-label="Enter Instruction here"></textarea>
                  <br></br>
                  
                  <br></br>
                  
                  <br></br><br></br>
                  <div class="btn-group">
                                    
                      <a href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Add Review</a>
                      
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
