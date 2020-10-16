import React, { Component } from 'react'
import '.././pages/driveawaystyle.css'
import Cards from'../images/driveawayimages'

export default class moderngates extends Component {
    render() {
        return (
            <div>
               <div className="dnapage">
                <div className="container-fluid bg-success">
                <div className="row d-flex">
                    <div className="col-md-6" style={{background: 'url(https://images.pexels.com/photos/911999/pexels-photo-911999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center', backgroundSize: 'cover'}}>
                    </div>
                    <div className="col-md-6 text-white" style={{padding: '40px', maxWidth: '600px'}}>
                    
                    <h2 style={{marginTop: '0px'}}>Modern Driveaway Gates</h2>
                    <p style={{textAlign:'justify'}}>L. A. Ornamental offers a wide selection of decorative custom driveway gates in Aluminum or Wrought Metals. Our quality aluminum
                        gates offer elegance, security, safety, and complete satisfaction to our customers. We offer a large selection of designs to choose
                        from, but we can manufacture your custom made design if you produce the design to us. Choose from a great selection of Security
                        Gates, Safety Gates, as we specialize in Front Driveway Entrance or Entry Gates.  Our Aluminum and wrought Iron Driveway Gates are
                        custom built to jobsite specifications and can be ordered in grades ranging from Residential to Commercial.
                        Metal Security Driveway Gates don't have to take away from the beauty of your main home Entrance or Entry we can Custom make the
                        gate to compliment you home Entry / Entrance. We recommend Aluminum as the Metal for your Electric or Automatic Driveway Gates.
                        Aluminum has many featurs - Aluminum will NEVER RUST!  Authentic Look of Cast Iron - Without the bulky weight and maintenance.
                        Strong Solid Structural Grade ½” to ¾” Cast Aluminum Ornamentation NOT cheap hollow tubing like most others, Lightweight – Minimal
                        wear on gate automation gate operators, Premium Stainless Steel Heavy Duty Ball Bearing Hinges for a Smooth Swing.
                        Manufacturing all custom estate gates, privacy gates, entrance gates, in Aluminum or Wrought Iron for residential or commercial
                        applications is our specialty. Manufacturing Aluminum and Wrought Iron Gates for over Thrity Years has given us the dedication and
                        knowledge to completely satisfy all our customers.</p>
                    </div>.
                </div>
                </div>
                <br></br>
                    <h2>Click On Images For More Information</h2>
                <br></br>
                <Cards></Cards>
        
            </div> 
            </div>
        )
    }
}
