import React, { Component } from 'react'
import '.././pages/dealersapplication.css'
import Earth from '../../asserts/gatesiamges/sgiphy.gif'

import SweetAlert from 'react-bootstrap-sweetalert';

export default class dealersapplication extends Component {



    render() {
        return (
			<div className="cmain" style={{background: 'url( https://cdn.wallpapersafari.com/64/92/uMUbRo.jpg)' }}>  

		
<div className= "earth">

<img src={Earth} className="rounded float-left" alt="aligment"/>	
</div>
				

			
       


<div className="contact">

            <div class="Cpage">
                        {/* <div className="col-md-6" style={{background: 'url( https://www.google.com/search?q=garden+gates+wallpaper&tbm=isch&ved=2ahUKEwiu7pjzhpjsAhXBCrcAHW-VA1IQ2-cCegQIABAA&oq=garden+gates+wallpaper&gs_lcp=CgNpbWcQAzoCCAA6BggAEAUQHjoGCAAQCBAeOgQIABAYOgQIIxAnOgQIABBDUJXyDVil6A5g7esOaAZwAHgAgAHzAYgBuxeSAQYwLjExLjWYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=1zx4X-6mOsGV3LUP76qOkAU&bih=1005&biw=1920&client=firefox-b-d#imgrc=UK8w7qdEgRtHHM) no-repeat center center', backgroundSize: 'cover'}}></div> */}
                        <h1>Dealers Application</h1>
                            {/* <div className="privacy"style={{padding: '50px', maxWidth: '600px'}}>
                                <h5 style={{marginTop: '0px'}}>Privacy Statement :</h5>
                                <p>In the process of placing an order we collect the customer e-mail address and home address. this is strictly used for billing,shipping,and news letter purposes.
                                We do not sell, distribute, or share that information with anyone. your information is held in a Secure file in our main office.</p>
                            </div>. */}

                    <div className="form">
                    
                        <form name="MyForm" action="dealersapplication">
            
                        <label ><font color="white">Company Name :</font></label><br/>
                        <input type="text"   name="fname" id="txt_fname" className="t1" required="required"  /> <br/>

                        <label><font color="white">Owner Name :</font></label><br/>
                        <input type="text"   name="lname" id="txt_lname" className="t2" required="required" /><br/>
            
                        <label><font color="white">Address :</font></label><br/>
                        <input type="text"   name="address" id="txt_address" className="t3" required="required" /><br/>

                        <label><font color="white">City :</font></label><br/>
                        <input type="text"   name="city" id="txt_city" className="t4" required="required" /><br/>

                        <label><font color="white">Zip Code :</font></label><br/>
                        <input type="text"   name="zip" id="txt_zip" className="t5" required="required" /><br/>

                        <label><font color="white">Email Address :</font></label><br/>
                        <input type="email"   name="email" id="txt_email" className="t6" required="required" /><br/>

                        <label><font color="white">Phone number :</font></label><br/>
                        <input type="text"   name="phone" id="txt_phone" className="t7" required="required" /><br/>

						<label><font color="white">Product of Intrest: </font> <br/>
						<select id="subject" name="subject" className="t7"> 
			         <option value="hello"> Gates </option>
			         <option value="quote">Remote Controllers </option>  
			         <option value="general"> Receivers  </option>
			      </select>
		      </label>

					{/*	<label for="subject">
			  <span class="required">Product of Intrest: </span>
			      <select id="subject" name="subject" tabindex="1">   
			         <option value="hello"> Gates </option>
			         <option value="quote">Remote Controllers </option>  
			         <option value="general"> Receivers  </option>
			      </select>
						</label> */} 
						<br/>


						
            <label><font color="white"> Message  :</font></label><br/>
                        {/* <input type="text"   name="text" className="t8"/><br/> */}
                        <textarea rows="5" cols="25" name="text" id="txt_t" className="t8"></textarea><br/>
            <br/>

			<button className="btn" type="submit" onclick="validation();">Submit</button>
                       {/*  <button className="btn" type="submit"  ​ > Submit {​​this.state.alert}​​</button> */}
            
                    </form>
                    </div>
                     
                   {/* <script src={{Contactjs}}></script> */}
                    </div>
                </div> 

	</div>
            
        )
    }
}
