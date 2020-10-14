function validation() {

    console.log("asdasdasd");
    var FirstName = document.getElementById('txt_fname');
    var LastName = document.getElementById('txt_lname');
    var Address = document.getElementById('txt_address');
    var City = document.getElementById('txt_city');
    var Zip = document.getElementById('txt_zip');
    var msg = document.getElementById('txt_email');
    var Phone = document.getElementById('txt_phone');
    var Text = document.getElementById('txt_t');
    
  
    var valid = true;
    valid = Empty(FirstName.value.length, "First name must required");
    if (valid == true) {
        valid = Empty(LastName.value, "Last name must required");
        if (valid == true) {
            valid = Empty(Address.value, "Address must required");
            if (valid == true) {
                valid = Empty(City.value, "please enter your city");
                if (valid == true){
                    valid = Empty(Zip.value, "please enter your zip code");
                    if (valid == true){
                        valid = Empty(msg.value, "Email must required");
                        if (valid == true) {
                            valid = Empty(Phone.value, "please enter contact number");
                            if (valid == true) {
                                valid = Empty(Text.value, "please insert how can I help you ?");
                                if (valid == true) {
                                alert("successfully");
                                }
                            }    
                        }
                    }      
                }
            }
        }
    }
  
  }
  
  function Empty(value, message) {
    if(value ==0)
    {
        alert(message);
        return false;
    }
    return true;
  }