document.getElementById("myForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let password=document.getElementById("password").value;

let phone=document.getElementById("phone").value;

let city=document.getElementById("city").value;

let terms=document.getElementById("terms").checked;

if(name==""){

alert("Enter Name");

return;

}

if(email==""){

alert("Enter Email");

return;

}

if(password.length<6){

alert("Password must be 6 characters");

return;

}

if(phone.length!=10){

alert("Enter Valid Phone Number");

return;

}

if(city==""){

alert("Select City");

return;

}

if(!terms){

alert("Accept Terms");

return;

}

document.getElementById("message").innerHTML="Registration Successful ✅";

document.getElementById("myForm").reset();

});