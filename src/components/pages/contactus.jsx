import React, { Component } from 'react'
import './contactus.css';
import Contactjs from '../js/contact'
import swal from 'sweetalert';


export default class contactus extends Component {
    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {}
        }
     }
     handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //fName
        if(!fields["fname"]){
           formIsValid = false;
           errors["fname"] = "first name cannot be empty";
        }
  
        if(typeof fields["fname"] !== "undefined"){
           if(!fields["fname"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["fname"] = "Only letters";
           }        
        }
        //lname
        if(!fields["lname"]){
            formIsValid = false;
            errors["lname"] = "last name cannot be empty";
         }
   
         if(typeof fields["lname"] !== "undefined"){
            if(!fields["lname"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["lname"] = "Only letters";
            }        
         }

         //address
        if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "address cannot be empty";
         }
   
         if(typeof fields["address"] !== "undefined"){
            if(!fields["address"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["address"] = "Only letters";
            }        
         }

         //city
        if(!fields["city"]){
            formIsValid = false;
            errors["city"] = "City cannot be empty";
         }
   
         if(typeof fields["city"] !== "undefined"){
            if(!fields["city"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["city"] = "Only letters";
            }        
         }

         //zip
        if(!fields["zip"]){
            formIsValid = false;
            errors["zip"] = "Zip code cannot be empty";
         }
   
         if(typeof fields["zip"] !== "undefined"){
            if(!fields["zip"].match(/.|\n/)){
               formIsValid = false;
               errors["zip"] = "Only letters";
            }        
         }

         //phone
        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Phone number cannot be empty";
         }
   
         if(typeof fields["phone"] !== "undefined"){
            if(!fields["phone"].match(/^[0-9\b]+$/)){
               formIsValid = false;
               errors["phone"] = "Only numbers";
            }        
         }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }   
       
       this.setState({errors: errors});
       return formIsValid;
   }
    
   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           //alert("Form submitted !!! we will contact you soon");
           swal("Good job!", "we will contact soon!", "success");
        }else{
           swal("somthing wrong!", "please check again!", "error")
        }
  
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    // myChangeHandler = (event) => {
    //     let nam = event.target.name;
    //     let val = event.target.value;
    //     if (nam === "phone") {
    //          if (!Number(val)) {
    //              alert("Your phone number must be a number");
    //          }
    //     }
    // this.setState({[nam]: val});
    // }
    render() {
        return (
             <div className="cmain" style={{background: 'url(https://cdn.wallpapersafari.com/64/92/uMUbRo.jpg)' }}>   
               {/* <div className="bcon"> */}
               <div className="contact">
                    <div class="Cpage">
                        {/* <div className="col-md-6" style={{background: 'url( https://www.google.com/search?q=garden+gates+wallpaper&tbm=isch&ved=2ahUKEwiu7pjzhpjsAhXBCrcAHW-VA1IQ2-cCegQIABAA&oq=garden+gates+wallpaper&gs_lcp=CgNpbWcQAzoCCAA6BggAEAUQHjoGCAAQCBAeOgQIABAYOgQIIxAnOgQIABBDUJXyDVil6A5g7esOaAZwAHgAgAHzAYgBuxeSAQYwLjExLjWYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=1zx4X-6mOsGV3LUP76qOkAU&bih=1005&biw=1920&client=firefox-b-d#imgrc=UK8w7qdEgRtHHM) no-repeat center center', backgroundSize: 'cover'}}></div> */}
                        <h1 style={{color: "white"}}>Contact Us </h1>
                            {/* <div className="privacy"style={{padding: '50px', maxWidth: '600px'}}>
                                <h5 style={{marginTop: '0px'}}>Privacy Statement :</h5>
                                <p>In the process of placing an order we collect the customer e-mail address and home address. this is strictly used for billing,shipping,and news letter purposes.
                                We do not sell, distribute, or share that information with anyone. your information is held in a Secure file in our main office.</p>
                            </div>. */}

                    <div className="form">
                    
                        <form name="MyForm" action="contactus.jsx" onSubmit={this.contactSubmit.bind(this)}>
            
                        <label ><font color="white">First Name : </font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["fname"]}</span>
                        <input type="text"   ref="fname" id="txt_fname" className="t1" onChange={this.handleChange.bind(this, "fname")} value={this.state.fields["fname"]}/><br/>
                         

                        <label><font color="white">Last Name :</font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["lname"]}</span> 
                        <input type="text"   ref="lname" id="txt_lname" className="t2" onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]}/><br/>
                        

                        <label><font color="white">Address :</font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["address"]}</span> 
                        <input type="text"   ref="address" id="txt_address" className="t3" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/><br/>
                        

                        <label><font color="white">City :</font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["city"]}</span> 
                        <input type="text"   ref="city" id="txt_city" className="t4" onChange={this.handleChange.bind(this, "city")} value={this.state.fields["city"]}/><br/>
                            

                        <label><font color="white">Zip Code :</font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["zip"]}</span> 
                        <input type="text"   ref="zip" id="txt_zip" className="t5" onChange={this.handleChange.bind(this, "zip")} value={this.state.fields["zip"]}/><br/>
                        

                        <label><font color="white">Email Address :</font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["email"]}</span>  
                        <input type="text"   ref="email" id="txt_email" className="t6" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/><br/>
                          

                        <label><font color="white">Phone number :</font></label><br/>
                        <span style={{color:"#44cd49"}}>{this.state.errors["phone"]}</span>  
                        <input type="text"   ref="phone"  id="txt_phone" className="t7" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/><br/>
                        

                        <label><font color="white">How can I help you ? :</font></label><br/>
                        {/* <input type="text"   name="text" className="t8"/><br/> */}
                        <textarea rows="5" cols="25" name="text" id="txt_t" className="t8"></textarea><br/>
            
                        <button className="btn" type="submit" >Contact</button>
            
                    </form>
                    </div>
                     
                    {/* <script src={{Contactjs}}></script>  */}
                    </div>
                </div> 
                </div>
            // </div>       
        )
    }
}

