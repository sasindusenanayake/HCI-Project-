import React, { Component } from 'react'
import '.././pages/dealersapplication.css'
import Earth from '../../asserts/gatesiamges/sgiphy.gif'

export default class dealersapplication extends Component {
    render() {
        return (
    <div>

		
				<div className= "earth">

				<img src={Earth} className="rounded float-left" alt="aligment"/>	
				</div>

				

			
              
              <div className="contact-form">
	<div id ="details">
		<h1> Dealers Application </h1>  
		
	                      
	</div>
		
		<p id="success"> Dealers registration form it needs to be fill completely </p>

		   <form method="post" action="/">
			<div>
		      <label for="companyname">
		      	<span class="required">Company Name: </span> 
		      	<input type="text" id="companyname" name="companyname"  placeholder="Company Name" required="required" tabindex="1" autofocus="autofocus" />
		      </label> 
			</div>
              
            <div>
		      <label for="ownername">
		      	<span class="required">Owner Name: </span> 
		      	<input type="text" id="ownername" name="ownername"  placeholder="Owner Name" required="required" tabindex="1" autofocus="autofocus" />
		      </label> 
			</div>

            <div>
		      <label for="Address">
		      	<span class="required">Address: </span> 
		      	<input type="text" id="Address" name="Address"  placeholder="Address" required="required" tabindex="1" autofocus="autofocus" />
		      </label> 
			</div>

            <div>
		      <label for="phone">
		      	<span class="required">Phone Number: </span> 
		      	<input type="text" id="phone" name="phone"  placeholder="phone number" required="required" tabindex="1" autofocus="autofocus" />
		      </label> 
			</div>


			<div>
		      <label for="email">
		      	<span class="required">Email: </span>
		      	<input type="email" id="email" name="email"  placeholder="Your Email" tabindex="2" required="required" />
		      </label>  
			</div>

			<div>		          
		      <label for="subject">
			  <span class="required">subject: </span>
			      <select id="subject" name="subject" tabindex="4">   
			         <option value="hello">Product Price Question</option>
			         <option value="quote">Where are my dragons?!</option>  
			         <option value="general">- Valar Morghulis - </option>
			      </select>
		      </label>
			</div>
			<div>		          
		      <label for="message">
		      	<span class="required">Message: </span> 
		      	<textarea id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required"></textarea> 
		      </label>  
			</div>
			<div>		           
		      <button name="submit" type="submit" id="submit" >SEND</button> 
			</div>
		   </form>

	</div>

	</div>
            
        )
    }
}
