import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'
import Cards from'../images/homegateimg'
import '.././pages/homegate.css'

const data =  [
    {'id':'1','src':'https://doctormetalworks.ca/wp-content/uploads/2018/03/driveway-gate-15.jpg'},
    {'id':'2','src':'http://gardenpassages.com/wp-content/uploads/2016/12/Tuscan-Gate-202.jpg'},
    {'id':'3','src':'http://garagegateremotes.com.au/shop/images/source/Remotes/Herculift/original.jpg'},
    {'id':'4','src':'https://cdn.shopify.com/s/files/1/0141/9617/8998/products/LINEAR_AP5_1200x1200.jpg?v=1565638254'},
    {'id':'5','src':'http://interiorexteriordoors.com/wp-content/uploads/2015/10/residential-roll-up-garage-doors-1.jpg'}
  ];

export default class homegate extends Component {
    render() {
        return (
           <div className="cover">
               <div className="dash">
               <SwiftSlider data={data}/>

               </div>
                  <div className="details">

                  <Cards></Cards>
                  </div>

                  <div className="rform">
                 
                    <h1 style={{marginTop: '0px'}}>About Us</h1>


                    <p>In this page you will find one of the largest Wrought Iron Fence and Gate Result selection in the net. A great selection of Security Gates, Safety Gates,
                    specializing in Front Gates, Driveway Gates, known as the Gate World at your finger tips. We have most brands of Automatic Electric Driveway Gate
                    Openers, brand name like Elite, Power Master, Eagle, and others, with many Door Gate Operating Devices. All the Driveway Metal Gates can be made of
                    Wrought Iron or Aluminum, the Aluminum Driveway Gates are lighter and painted through a powder coat process which is oven baked, and is superior in
                    the Aluminum Metals. Aluminum is also less expensive to ship and with Automatic Driveway Gates, the Electric Gate Openers life of the unit will be
                    extended, which thats a couple of reasons why we recommend the Aluminium Driveway Gates over the Wrought Iron Driveway Gates. Baby Safety Gate,
                    Child or Pet Safety Gates are also available.  In the pictures of all the Front Entry Gates, Driveway Gates, Garden Entrance Gates that are listed below just
                    click images to learn more about the Gate Designs that are available and pricing.  Although we offer a wide selection or Ornamental Designs or
                    Decorative Designs, we can design and manufacture any style in aluminum or wrought iron metals. L. A. Ornamnetal & Rack Corp also offers Fences,
                    Garden or Walk Thru Gates to match your driveway  gates. With over thrity five years of experience in manufacturing and designing elegant, custom, or
                    exotic Aluminum Driveway Gates and Fences, our past and future customers can have peace of mind that they are receiving quality workmanship</p>
                   

                          <h2> Please fill this Dealers Apllication </h2>    

                           <a href="/dealersapplication"> <h4> Please click this link </h4></a>             
                                   

                  </div>

           </div>
            


        )
    }
}
