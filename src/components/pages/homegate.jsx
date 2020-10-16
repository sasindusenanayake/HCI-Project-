import React, { Component } from 'react'
import SwiftSlider from 'react-swift-slider'
import Cards from'../images/homegateimg'
import '.././pages/homegate.css'

const data =  [
  {'id':'1','src':'https://xcel.pl/images/min/artykuly/150/nowoczesne_ogrodzenie_katowice_arete_horizon_rombo_xcel_2_26_-1920.jpg'},
  {'id':'2','src':'https://fancyfence.pl/en/wp-content/uploads/2017/09/sek_1-2-1024x422.jpg'},
  {'id':'3','src':'https://fancyfence.pl/en/wp-content/uploads/2017/07/basen_maly-1-1024x422.jpg'},
  {'id':'4','src':'https://fancyfence.pl/en/wp-content/uploads/2017/09/sek_2-1-1024x422.jpg'},
  {'id':'5','src':'https://xcel.pl/images/min/artykuly/150/nowoczesne_ogrodzenie_katowice_arete_horizon_rombo_xcel_2_26_-1920.jpg'}
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
