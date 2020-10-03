import React, { Component } from 'react'
import './contactus.css';

export default class contactus extends Component {
    render() {
        return (
            <div className="cmain" style={{background: 'url( https://cdn.wallpapersafari.com/64/92/uMUbRo.jpg)'}}>   
                <div className="contact">
                    <div class="Cpage">
                        {/* <div className="col-md-6" style={{background: 'url( https://www.google.com/search?q=garden+gates+wallpaper&tbm=isch&ved=2ahUKEwiu7pjzhpjsAhXBCrcAHW-VA1IQ2-cCegQIABAA&oq=garden+gates+wallpaper&gs_lcp=CgNpbWcQAzoCCAA6BggAEAUQHjoGCAAQCBAeOgQIABAYOgQIIxAnOgQIABBDUJXyDVil6A5g7esOaAZwAHgAgAHzAYgBuxeSAQYwLjExLjWYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=1zx4X-6mOsGV3LUP76qOkAU&bih=1005&biw=1920&client=firefox-b-d#imgrc=UK8w7qdEgRtHHM) no-repeat center center', backgroundSize: 'cover'}}></div> */}
                        <h1>Contact Us</h1>
                            {/* <div className="privacy"style={{padding: '50px', maxWidth: '600px'}}>
                                <h5 style={{marginTop: '0px'}}>Privacy Statement :</h5>
                                <p>In the process of placing an order we collect the customer e-mail address and home address. this is strictly used for billing,shipping,and news letter purposes.
                                We do not sell, distribute, or share that information with anyone. your information is held in a Secure file in our main office.</p>
                            </div>. */}

                    <div className="form">
                    
                        <form name="MyForm" action="contactus.jsx">
            
                        <label ><font color="white">First Name :</font></label><br/>
                        <input type="text"   name="fname" className="t1"/><br/>

                        <label><font color="white">Last Name :</font></label><br/>
                        <input type="text"   name="lname" className="t2"/><br/>
            
                        <label><font color="white">Address :</font></label><br/>
                        <input type="text"   name="address" className="t3"/><br/>

                        <label><font color="white">City :</font></label><br/>
                        <input type="text"   name="city" className="t4"/><br/>

                        <label><font color="white">Zip Code :</font></label><br/>
                        <input type="text"   name="zip" className="t5"/><br/>

                        <label><font color="white">Email Address :</font></label><br/>
                        <input type="text"   name="email" className="t6"/><br/>

                        <label><font color="white">Phone number :</font></label><br/>
                        <input type="text"   name="email" className="t7"/><br/>

                        <label><font color="white">How can I help you ? :</font></label><br/>
                        {/* <input type="text"   name="text" className="t8"/><br/> */}
                        <textarea rows="5" cols="25" name="text" className="t8"></textarea><br/>
            
                        <button className="btn" type="button" >Contact</button>
            
                    </form>

                    
                    </div>
                        
                    </div>
                </div> 
            </div>       
        )
    }
}

